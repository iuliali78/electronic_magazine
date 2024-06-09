export type Options<T> = {
  title: string;
  props: T;
};

// Компонент в модальном окне отображается динамично,
// в зависимости какой элемент будет передан в стор
export interface IActionShowModal<T> {
  children: (props: T) => React.ReactElement;
  options?: Options<T>;
}
