export interface IRoute {
  id: number;
  url: string;
  Component: JSX.Element;

// У компонента могут быть указаны вложенные пути, например страница с журналом
  nestedComponents?: IRoute[]
}
