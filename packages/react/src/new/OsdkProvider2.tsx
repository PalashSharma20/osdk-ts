/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Client } from "@osdk/client";
import {
  createObservableClient,
  type ObservableClient,
} from "@osdk/client/unstable-do-not-use";
import React, { useMemo, useRef } from "react";
import { OsdkContext } from "../OsdkContext.js";
import {
  type DevToolsRegistry,
  getRegisteredDevTools,
} from "../public/devtools-registry.js";
import { OsdkContext2 } from "./OsdkContext2.js";

interface OsdkProviderOptions {
  children: React.ReactNode;
  client: Client;
  observableClient?: ObservableClient;
  enableDevTools?: boolean;
}

export function OsdkProvider2({
  children,
  client,
  observableClient,
  enableDevTools,
}: OsdkProviderOptions): React.JSX.Element {
  // If enableDevTools not specified, auto-detect based on whether devtools are registered
  // (devtools only get registered when the vite plugin is active in dev mode)
  const effectiveEnableDevTools = enableDevTools
    ?? (getRegisteredDevTools() != null);
  const baseObservableClient = useMemo(
    () => observableClient ?? createObservableClient(client),
    [client, observableClient],
  );

  const previousRef = useRef<
    {
      base: ObservableClient;
      monitored: ObservableClient;
      devTools: DevToolsRegistry;
    } | null
  >(null);

  const wrappedClient = useMemo(() => {
    const devTools = getRegisteredDevTools();

    const prev = previousRef.current;
    if (prev != null && prev.base !== baseObservableClient) {
      prev.devTools.dispose?.(prev.monitored);
      previousRef.current = null;
    }

    if (!effectiveEnableDevTools || devTools == null) {
      previousRef.current = null;
      return baseObservableClient;
    }

    const monitoredClient = devTools.wrapClient(
      baseObservableClient,
    ) as ObservableClient;
    previousRef.current = {
      base: baseObservableClient,
      monitored: monitoredClient,
      devTools,
    };
    return monitoredClient;
  }, [effectiveEnableDevTools, baseObservableClient]);

  const wrappedChildren = useMemo(() => {
    const prev = previousRef.current;
    if (!effectiveEnableDevTools || prev == null) {
      return children;
    }
    return prev.devTools.wrapChildren(children, prev.monitored);
  }, [children, effectiveEnableDevTools, wrappedClient]);

  return (
    <OsdkContext2.Provider
      value={{ client, observableClient: wrappedClient }}
    >
      <OsdkContext.Provider value={{ client }}>
        {wrappedChildren}
      </OsdkContext.Provider>
    </OsdkContext2.Provider>
  );
}
