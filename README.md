
## 👉 Get Started
Install dependencies
```
npm install
```
Update your `.env` file with values for each environment variable
```
API_KEY=AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas
etc ...
```

Install the Netlify CLI
```
npm install netlify-cli -g
```
Run the development server
```
netlify dev
```
When the above command completes you'll be able to view your website at `http://localhost:8888`

_Note: You can run just the front-end with `npm run start`, but `netlify dev` also handles running your API endpoints (located in the `/api` directory)._

## 🥞 Stack
This project uses the following libraries and services:
- Framework - [Create React App](https://create-react-app.dev) with React Router
- UI Kit - [Bootstrap](https://react-bootstrap.github.io)
- Database - [Cloud Firestore](https://firebase.google.com/products/firestore)
- Analytics - [Google Analytics](https://googleanalytics.com)
- Hosting - [Netlify](https://netlify.com)


## 📚 Guide

<details> <summary><b>Styles</b></summary> <p> You can edit Bootstrap SASS variables in the global stylesheet located at <code><a href="src/styles/global.scss">src/styles/global.scss</a></code>. Variables allow you to control global styles (like colors and fonts), as well as element specific styles (like button padding). Before overriding Bootstrap elements with custom style check the <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">Bootstrap docs</a> to see if you can do what need by tweaking a SASS variable. </p> <p> Custom styles are located in their related component's directory. For example, if any custom style is applied to the <code>Navbar</code> component you'll find it in <code>src/components/Navbar.scss</code>. We ensure custom styles are scoped to their component by prepending the classname with the component name (such as <code>.Navbar__brand</code>). This ensures styles never affect elements in other components. If styles need to be re-used in multiple components consider creating a new component that encapsulates that style and structure and using that component in multiple places. </p> </details>

<details>
<summary><b>Routing</b></summary>
<p>
  This project uses <a target="_blank" href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a> and includes a convenient <code>useRouter</code> hook (located in <code><a href="src/util/router.js">src/util/router.js</a></code>) that wraps React Router and gives all the route methods and data you need.

```js
import { Link, useRouter } from "./../util/router.js";

function MyComponent() {
  // Get the router object
  const router = useRouter();

  // Get value from query string (?postId=123) or route param (/:postId)
  console.log(router.query.postId);

  // Get current pathname
  console.log(router.pathname);

  // Navigate with the <Link> component or with router.push()
  return (
    <div>
      <Link to="/about">About</Link>
      <button onClick={(e) => router.push("/about")}>About</button>
    </div>
  );
}
```
</p>
</details>



<details>
<summary><b>Database</b></summary>
<p>
  This project uses <a href="https://firebase.google.com/products/firestore">Cloud Firestore</a> and includes some data fetching hooks to get you started (located in <code><a href="src/util/db.js">src/util/db.js</a></code>). You'll want to edit that file and add any additional query hooks you need for your project.

```js
import { useAuth } from './../util/auth.js';
import { useItemsByOwner } from './../util/db.js';
import ItemsList from './ItemsList.js';

function ItemsPage(){
  const auth = useAuth();

  // Fetch items by owner
  // Returned status value will be "idle" if we're waiting on
  // the uid value or "loading" if the query is executing.
  const uid = auth.user ? auth.user.uid : undefined;
  const { data: items, status } = useItemsByOwner(uid);

  // Once we have items data render ItemsList component
  return (
    <div>
      {(status === "idle" || status === "loading") ? (
        <span>One moment please</span>
      ) : (
        <ItemsList data={items}>
      )}
    </div>
  );
}
```
</p>
</details>

<details>
<summary><b>Deployment</b></summary>
<p>
Install the Netlify CLI

```
npm install netlify-cli -g
```

Link codebase to a Netlify project (choose the "create and deploy manually" option)

```
netlify init
```

Add each variable from your `.env` file to your Netlify project, including ones prefixed with "REACT_APP\_". You can also use the Netlify UI for this by going to your Site settings → Build & Deploy → Environment.

```
netlify env:set VARIABLE_NAME value
```

Build for production

```
npm run build
```

Then run this command to deploy to Netlify
```
netlify deploy
```

See the <a target="_blank" href="https://docs.netlify.com/cli/get-started/#manual-deploys">Netlify docs</a> for more details.
</p>
</details>

<details>
<summary><b>Other</b></summary>
<p>
  This project was created using <a href="https://divjoy.com?ref=readme_other">Divjoy</a>, the React codebase generator. You can find more info in the <a href="https://docs.divjoy.com">Divjoy Docs</a>.
</p>
</details>
  # crispr-explained
