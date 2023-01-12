// ------------------------------ Sorting Logic ------------------------------

import { RankingInfo, rankItem, compareItems } from '@tanstack/match-sorter-utils';
import { FilterFn, SortingFn, sortingFns } from '@tanstack/react-table';

/**
 * Declare the fuzzy filter function as a filter function that can be used by the table.
 * This is required to get type checking for the filter function.
 */
declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const allowed_operators = ['=', '>', '<', '>=', '<=', '!='];

/**
 * This is the fuzzy filter function. It will be used to filter the table.
 * @param row The row that is being filtered
 * @param columnId The column that is being filtered
 * @param comparingTo The value that is being used to filter the column
 * @param addMeta A function that can be used to add meta data to the row
 * @returns A boolean that determines if the row should be filtered in/out
 */
export const fuzzyFilter: FilterFn<any> = (row, columnId, comparingTo, addMeta) => {
  // Rank the item. This will return an object with information about how well the item matches the value
  const comparingFrom = row.getValue<string>(columnId);

  let resultRank;

  // Check if our value contains operators and if so, split it into the operator and the value
  const operator = allowed_operators.find((op) => comparingTo.includes(op));
  if (operator) {
    const [op, value] = comparingFrom.split(operator);

    switch (operator) {
    }
  }

  resultRank = rankItem(comparingFrom, comparingTo, {
    keepDiacritics: true, // When comparing, keep diacritics. This means that "a" and "á" will be treated as different characters.
  });

  // Store the itemRank info
  addMeta({
    itemRank: resultRank,
  });

  // Return if the item should be filtered in/out
  return resultRank.passed;
};

/**
 * This is the fuzzy sort function. It will be used to sort the table.
 * @param rowA The first row that is being compared
 * @param rowB The second row that is being compared
 * @param columnId The column that is being sorted
 * @returns A direction that the rows should be sorted in. -1 if a should come first, 1 if b should come first, 0 if equal
 */
export const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  let dir = 0; // The direction that the rows should be sorted in. -1 if a should come first, 1 if b should come first, 0 if equal

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]?.itemRank && rowB.columnFiltersMeta[columnId]?.itemRank) {
    dir = compareItems(rowA.columnFiltersMeta[columnId]?.itemRank!, rowB.columnFiltersMeta[columnId]?.itemRank!);
    console.log(`Comparing ${rowA.getValue(columnId)} and ${rowB.getValue(columnId)}: ${dir}`);
  }

  // If the item values are equal. I.e. the items are equal or the items are not ranked, sort them by their alphanumeric value.
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};
