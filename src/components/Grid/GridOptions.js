import { useEffect, useId } from "react";

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
  values: ["def", "beg", "cen", "end", "spc-ar", "spc-bt", "spc-ev", "str"],
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
  values: ["def", "beg", "cen", "end", "str"],
};

const PlaceItems = {
  name: "Place Items (Justify + Align)",
  class: "items-css",
  key: `pi`,
  values: ["def", "beg", "cen", "end"],
};

const Gap = {
  name: "Gap",
  class: "gap-css",
  key: `gap`,
  values: ["def", "0", "sm", "md", "lg", "xl"],
};

const Height = {
  name: "Height (Container)",
  class: "height-css",
  key: `ht`,
  values: ["def", "sm", "md", "lg", "xl"],
};

const Flex = {
  name: "Flex",
  class: "flex-css",
  key: `flx`,
  values: ["def", "wrap"],
};

export default function GridOptions({
  shape,
  selectedOptions,
  showSelectedOptions,
  onChange,
  resetNotification,
}) {
  const uid = useId();

  return (
    <div className="grid-1col mb4">
      <div className="grid-2cols">
        <div>
          <RadioSet
            options={JustifyContent}
            uid={uid}
            onChange={onChange}
            resetNotification={resetNotification}
          />
          <RadioSet
            options={AlignContent}
            uid={uid}
            onChange={onChange}
            resetNotification={resetNotification}
          />
          <RadioSet
            options={PlaceContent}
            uid={uid}
            onChange={onChange}
            resetNotification={resetNotification}
          />
        </div>
        <div>
          <RadioSet
            options={JustifyItems}
            uid={uid}
            onChange={onChange}
            resetNotification={resetNotification}
          />
          <RadioSet
            options={AlignItems}
            uid={uid}
            onChange={onChange}
            resetNotification={resetNotification}
          />
          <RadioSet
            options={PlaceItems}
            uid={uid}
            onChange={onChange}
            resetNotification={resetNotification}
          />
        </div>
      </div>
      <div className="grid-2cols">
        <RadioSet
          options={Gap}
          uid={uid}
          onChange={onChange}
          resetNotification={resetNotification}
        />
        <RadioSet
          options={Height}
          uid={uid}
          onChange={onChange}
          resetNotification={resetNotification}
        />
      </div>
      {shape.includes("flex") && (
        <div className="grid-2cols">
          <RadioSet
            options={Flex}
            uid={uid}
            onChange={onChange}
            resetNotification={resetNotification}
          />
        </div>
      )}

      {showSelectedOptions && (
        <>
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
          {/* <div className="details">
            <div>Details:</div>
          </div> */}
        </>
      )}
    </div>
  );
}
