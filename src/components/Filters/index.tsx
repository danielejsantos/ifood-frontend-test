import React, { useState, useEffect } from "react";

import {
  FiltersOptionsProps,
  FiltersValueProps,
} from "../../pages/Homepage/types";

import { mapValues, timestamp } from "../../helpers";

import { API_MOCKY } from "../../services/apis";

import Select from "../Select";
import Input from "../Input";

interface FiltersProps {
  setFiltersData: (value: any) => void;
  filtersData: FiltersValueProps;
}

const Filters: React.FC<FiltersProps> = ({ setFiltersData, filtersData }) => {
  const [
    filtersOptions,
    setFilterOptions,
  ] = useState<FiltersOptionsProps | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await API_MOCKY.get("/5a25fade2e0000213aa90776");
      setFilterOptions(data);
    })();
  }, [setFilterOptions]);

  return (
    <>
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
    </>
  );
};

export default Filters;
