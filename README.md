# angular-async
Async unwrap filters for AngularJS 1.x

```html
  <ul>
    <li ng-repeat="item in (items | async)">
      {{ (item | await).content  | uppercase }}
    </li>
  </ul>
```


sidenote: `async` and `await` are the same only aliased
