import {
  CbacBanner,
  CbacPicker,
  CbacPickerDialog,
} from "@osdk/react-components-gotham/experimental";
import React from "react";

interface CbacPanelProps {
  onClose: () => void;
  markingIds: string[];
  onMarkingIdsChange: (markingIds: string[]) => void;
}

export function CbacPanel({
  onClose,
  markingIds: selectedMarkingIds,
  onMarkingIdsChange: setSelectedMarkingIds,
}: CbacPanelProps) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handlePickerChange = React.useCallback((markingIds: string[]) => {
    setSelectedMarkingIds(markingIds);
  }, [setSelectedMarkingIds]);

  const handleDialogToggle = React.useCallback(() => {
    setIsDialogOpen((prev) => !prev);
  }, []);

  const handleDialogConfirm = React.useCallback((markingIds: string[]) => {
    setSelectedMarkingIds(markingIds);
    setIsDialogOpen(false);
  }, []);

  const handleBannerClick = React.useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  return (
    <div className="h-full flex flex-col bg-[var(--officenetwork-bg-surface)]">
      {/* Header */}
      <div className="p-4 border-b border-[var(--officenetwork-border-default)] flex items-start justify-between">
        <div>
          <div className="officenetwork-section-label text-[var(--officenetwork-hier-evp)] mb-1">
            CBAC Mode
          </div>
          <h2 className="text-lg font-semibold text-[var(--officenetwork-text-primary)] text-balance">
            Classification
          </h2>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-[var(--officenetwork-text-muted)] hover:text-[var(--officenetwork-text-primary)] hover:bg-[var(--officenetwork-bg-elevated)] rounded transition-colors"
          aria-label="Close CBAC panel"
        >
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {/* Banner Section */}
        <div className="p-4 border-b border-[var(--officenetwork-border-default)]">
          <div className="officenetwork-section-label mb-2">Current Banner</div>
          <CbacBanner
            markingIds={selectedMarkingIds}
            onClick={handleBannerClick}
          />
          {selectedMarkingIds.length === 0 && (
            <div className="text-xs text-[var(--officenetwork-text-muted)] mt-2">
              No markings selected. Use the picker below or click the banner to
              open the dialog.
            </div>
          )}
        </div>

        {/* Inline Picker Section */}
        <div className="p-4 border-b border-[var(--officenetwork-border-default)]">
          <div className="officenetwork-section-label mb-2">Inline Picker</div>
          <CbacPicker onChange={handlePickerChange} />
        </div>

        {/* Dialog Trigger Section */}
        <div className="p-4">
          <div className="officenetwork-section-label mb-2">Dialog Picker</div>
          <button
            onClick={handleDialogToggle}
            className="w-full px-4 py-2 text-xs font-medium bg-[var(--officenetwork-bg-elevated)] border border-[var(--officenetwork-border-default)] rounded text-[var(--officenetwork-text-secondary)] hover:text-[var(--officenetwork-text-primary)] hover:border-[var(--officenetwork-text-muted)] transition-colors"
          >
            Open Classification Dialog
            {selectedMarkingIds.length > 0 && (
              <span className="ml-2 text-[var(--officenetwork-hier-evp)]">
                ({selectedMarkingIds.length} selected)
              </span>
            )}
          </button>
          <CbacPickerDialog
            isOpen={isDialogOpen}
            onOpenChange={handleDialogToggle}
            onConfirm={handleDialogConfirm}
            initialMarkingIds={selectedMarkingIds}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-[var(--officenetwork-border-default)] bg-[var(--officenetwork-bg-base)]">
        <div className="flex items-center justify-between">
          <div className="text-xs text-[var(--officenetwork-text-muted)] officenetwork-mono tabular-nums">
            <span className="text-[var(--officenetwork-hier-evp)]">
              {selectedMarkingIds.length}
            </span>{" "}
            markings selected
          </div>
          <div className="text-[10px] text-[var(--officenetwork-text-muted)] uppercase tracking-wider">
            CBAC Picker
          </div>
        </div>
      </div>
    </div>
  );
}
