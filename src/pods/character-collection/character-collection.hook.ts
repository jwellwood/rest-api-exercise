import React, { useState, useEffect } from 'react';
import { CharacterVm } from 'common/models';
import { getFilteredCharacterCollection } from 'core/api/character-collection.api';
import { mapFromApiToVm } from 'common/mappers/character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterVm[]
  >([]);
  const [pageInfo, setPageInfo] = React.useState(null);

  const loadCharacterCollection = (searchTerm: string = '', page?: number) => {
    getFilteredCharacterCollection(searchTerm, page)
      .then((result) => {
        const { info, results } = result;

        setCharacterCollection(mapToCollection(results, mapFromApiToVm));
        setPageInfo(info);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return { characterCollection, loadCharacterCollection, pageInfo };
};
