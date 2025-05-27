export function usePagination<T>(data: T[], currentPage: number, perPage = 20) {
  const total = Math.ceil(data.length / perPage);
  const paginatedListings = data.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return {
    paginatedListings,
    totalPages: total,
  };
}
