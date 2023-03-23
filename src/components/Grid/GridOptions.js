import { useId } from "react";

import RadioSet from "../Fieldset/RadioSet";

const JustifyContent = {
  name: "Justify Content",
  class: "content-css",
  key: `jc`,
  values: ["def", "beg", "cen", "end", "spc-ar", "spc-bt", "spc-ev"],
};

const AlignContent = {
  name: "Align Content",
  class: "content-css",
  key: `ac`,
  values: ["def", "beg", "cen", "end", "spc-ar", "spc-bt", "spc-ev"],
};

const PlaceContent = {
  name: "Place Content (Justify + Align)",
  class: "content-css",
  key: `pc`,
  values: ["def", "beg", "cen", "end"],
};

const JustifyItems = {
  name: "Justify Items",
  class: "items-css",
  key: `ji`,
  values: ["def", "beg", "cen", "end", "left", "right"],
};

const AlignItems = {
  name: "Align Items",
  class: "items-css",
  key: `ai`,
  values: ["def", "beg", "cen", "end"],
};

const PlaceItems = {
  name: "Place Items (Justify + Align)",
  class: "items-css",
  key: `pi`,
  values: ["def", "beg", "cen", "end"],
};

export default function GridOptions({
  selectedOptions,
  showSelectedOptions,
  onChange,
}) {
  const uid = useId();

  return (
    <div className="grid-1col mb4">
      <div className="grid-2cols">
        <div>
          <RadioSet options={JustifyContent} uid={uid} onChange={onChange} />
          <RadioSet options={AlignContent} uid={uid} onChange={onChange} />
          <RadioSet options={PlaceContent} uid={uid} onChange={onChange} />
        </div>
        <div>
          <RadioSet options={JustifyItems} uid={uid} onChange={onChange} />
          <RadioSet options={AlignItems} uid={uid} onChange={onChange} />
          <RadioSet options={PlaceItems} uid={uid} onChange={onChange} />
        </div>
      </div>

      {showSelectedOptions && (
        <div className="selected-options">
          <div>Selected options:</div>
          {selectedOptions &&
            selectedOptions.split(" ").map((k) => {
              return (
                <div key={k} className="option">
                  {k}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
