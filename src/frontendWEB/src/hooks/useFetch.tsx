type Props = {
  url: string;
};

export function useFetch({ url }: Props) {
  return fetch(url);
}
