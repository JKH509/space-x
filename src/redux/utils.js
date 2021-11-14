export const date = (object) => object.date_local;
export const getYear = (object) => date(object).split('-')[0];
export const getYearWithoutTime = (object) => object.split('T')[0];