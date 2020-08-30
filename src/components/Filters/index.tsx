import React from "react";

import {
  FiltersOptionsProps,
  FiltersValueProps,
} from "../../pages/Homepage/types";

import { mapValues, timestamp } from "../../helpers";

import Select from "../Select";
import Input from "../Input";

import { Form } from "./styles";

interface FiltersProps {
  setFiltersData: (value: any) => void;
  filtersData: FiltersValueProps;
  filtersOptions: FiltersOptionsProps | null;
}

const Filters: React.FC<FiltersProps> = ({
  filtersOptions,
  setFiltersData,
  filtersData,
}) => {
  console.log(mapValues(1, filtersOptions));

  return (
    <Form>
      <Select
        value={filtersData.locale}
        options={mapValues(0, filtersOptions) || []}
        onChange={(e) =>
          setFiltersData({ type: "locale", payload: e.target.value })
        }
      />
      <Select
        value={filtersData.country}
        options={mapValues(1, filtersOptions) || []}
        onChange={(e) =>
          setFiltersData({ type: "country", payload: e.target.value })
        }
      />
      <Input
        value={filtersData.timestamp || timestamp}
        type="datetime-local"
        onChange={(e) =>
          setFiltersData({ type: "timestamp", payload: e.target.value })
        }
      />
      <Input
        value={filtersData.limit}
        type="number"
        min={1}
        max={50}
        onChange={(e) =>
          setFiltersData({ type: "limit", payload: Number(e.target.value) })
        }
      />
      <Input
        value={filtersData.offset}
        type="number"
        min={1}
        max={50}
        onChange={(e) =>
          setFiltersData({ type: "offset", payload: Number(e.target.value) })
        }
      />
    </Form>
  );
};
export default Filters;
