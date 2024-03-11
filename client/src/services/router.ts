const Router = {
  init: () => {
    document.querySelectorAll<HTMLAnchorElement>('li.nav__item > a').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const url = a.getAttribute('href');
        console.log({ url });
        if (url) Router.go(url);
        else console.error(`No URL found for ${a}`);

      });
    });

    // As this listens to changes in URL, you set it to navigate appropriately
    window.addEventListener('popstate', (e) => Router.go(e.state.route, false));
    // In case it does not correspond to an anchor, 
    // but a deep link e.g. received from someone
    Router.go(location.pathname);
  },
  go: (route: string, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }

    // Depending on the route, you grab the corresponding HTML
    // and append it to the file
    /*     
    let pageElement: Node & { dataset: Record<string, unknown> };

    switch (route) { //TODO make routes programmatically accessible
      case '/':
        pageElement = document.createElement('h1');
        pageElement.textContent = '';
        break;
      case '/about':
        pageElement = document.createElement('about-page');
        break;
      case '/thoughts':
        pageElement = document.createElement('thoughts-page');
        pageElement.textContent = 'THOUGHTS';
        if (route.startsWith('/thoughts/')) {
          // TODO add routing for individual thoughts.
          const paramId = route.substring(route.lastIndexOf('/'));
          pageElement.dataset.id = paramId;
          console.log(paramId);
        }
        break;
      case '/work':
        pageElement = document.createElement('work-page');
        pageElement.textContent = 'THOUGHTS';
        break;
      default: // This is the default, which would naturally be an error page
        pageElement = document.createElement('h1');
        pageElement.textContent = 'ERROR';
        break;
    }
    const cache = document.querySelector('main')!;
    cache.childNodes.forEach(node => node.remove());
    cache.appendChild(pageElement);
    console.log('cache :>> ', cache.childNodes[0].childNodes);
    */
    window.scrollX = 0;
    window.scrollY = 0;

  }
};


export default Router;