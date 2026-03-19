import { v4 as uuidv4 } from 'uuid';

export const pagination = (totalRecords: number, itemsPerPage: number, page: number) => {
  const totalPage = Math.ceil(totalRecords / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage + 1;
  const endIndex = page * itemsPerPage;
  const firstPageUrl = `/?page=${page}`;

  const prevPageUrl = page === 1 ? null : `/?page=${page - 1}`;
  const lastPage = totalPage;
  const nextPageUrl = lastPage === page ? null : `/?page=${page + 1}`;

  const links = [];

  for (let i = 1; i <= totalPage; i++) {
    if (i === 1) {
      links.push({
        url: page !== 1 ? `/?page=${page - 1}` : `/?page=1`,
        label: '&laquo; Previous',
      });
    }

    links.push({
      url: `/?page=${i}`,
      label: i,
      active: page === i,
      page: i,
    });

    if (i === totalPage) {
      links.push({
        url: page !== totalPage ? `/?page=${page + 1}` : `/?page=${totalPage}`,
        label: 'Next &raquo;',
        active: page === totalPage,
        page: page !== totalPage ? page + 1 : totalPage,
      });
    }
  }

  return {
    pagination: {
      first_page_url: firstPageUrl,
      from: startIndex,
      items_per_page: Number(itemsPerPage),
      last_page: lastPage,
      links,
      next_page_url: nextPageUrl,
      page: Number(page),
      prev_page_url: prevPageUrl,
      to: endIndex,
      total: Number(totalRecords),
    },
  };
};

export const generatePrefixedId = (prefix: string) => {
  return `${prefix}_${uuidv4()}`;
};

export function generateNumber(length: number): string {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
