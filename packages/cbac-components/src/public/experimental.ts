/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

// CBAC Picker - Selection logic utilities
export {
  computeMarkingStates,
  groupMarkingsByCategory,
  toggleMarking,
} from "../cbac-picker/utils/selectionLogic.js";
// CBAC Picker - Types
export type {
  CategoryMarkingGroup,
  CbacBannerData,
  MarkingSelectionState,
  PickerMarking,
  PickerMarkingCategory,
  RequiredMarkingGroup,
} from "../cbac-picker/types.js";

// CBAC Picker - OSDK-aware components
export { CbacBanner } from "../cbac-picker/CbacBanner.js";
export type { CbacBannerProps } from "../cbac-picker/CbacBanner.js";
export { CbacBannerPopover } from "../cbac-picker/CbacBannerPopover.js";
export type { CbacBannerPopoverProps } from "../cbac-picker/CbacBannerPopover.js";
export { CbacPicker } from "../cbac-picker/CbacPicker.js";
export type { CbacPickerProps } from "../cbac-picker/CbacPicker.js";
export { CbacPickerDialog } from "../cbac-picker/CbacPickerDialog.js";
export type { CbacPickerDialogProps } from "../cbac-picker/CbacPickerDialog.js";

// CBAC Picker - Base components for custom implementations
export { BaseCbacBanner } from "../cbac-picker/base/BaseCbacBanner.js";
export type { BaseCbacBannerProps } from "../cbac-picker/base/BaseCbacBanner.js";
export { BaseCbacBannerPopover } from "../cbac-picker/base/BaseCbacBannerPopover.js";
export type {
  AppliedMarkingGroup,
  BaseCbacBannerPopoverProps,
} from "../cbac-picker/base/BaseCbacBannerPopover.js";
export { BaseCbacPicker } from "../cbac-picker/base/BaseCbacPicker.js";
export type { BaseCbacPickerProps } from "../cbac-picker/base/BaseCbacPicker.js";
export { BaseCbacPickerDialog } from "../cbac-picker/base/BaseCbacPickerDialog.js";
export type { BaseCbacPickerDialogProps } from "../cbac-picker/base/BaseCbacPickerDialog.js";
export { InfoBanner } from "../cbac-picker/base/InfoBanner.js";
export type { InfoBannerProps } from "../cbac-picker/base/InfoBanner.js";
export { ValidationWarning } from "../cbac-picker/base/ValidationWarning.js";
export type { ValidationWarningProps } from "../cbac-picker/base/ValidationWarning.js";
