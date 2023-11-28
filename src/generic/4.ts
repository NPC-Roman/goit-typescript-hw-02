/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
class Component {
  constructor (public props:T) {

  }
}
class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}
export {};
*/

interface ComponentProps {
  title: string;
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

/*---DONE---*/