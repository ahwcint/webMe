export type BaseApiResponse<T> =
  | BaseApiResponseSuccess<T>
  | BaseApiResponseError;

type BaseApiResponseSuccess<T> = {
  data: T;
  message: string;
};

type BaseApiResponseError = {
  data: any;
  message: string;
};
