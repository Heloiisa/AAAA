Vue.component('card', {
    props: ['title', 'subtitle'],
    template:
    '<div class="column"> <div class="card"> <div class="card-content has-text-centered"> <div class="content"> <i class="fa fa-cube fa-4x" aria-hidden="true"></i> </div> </div> <header class="card-header"> <p class="card-header-title">{{ title }}</p> </header> <footer class="card-footer"> <p>{{ subtitle }}</p> </footer> </div> </div>'
});

Vue.component('searchbar', {
    template:
    '<div class="column is-12"> <div class="columns dflex3"> <div class="column is-6-tablet"> <div class="columns"> <div class="column is-11"> <input id="searchbar" type="search" placeholder="Pesquisar" /> </div> <div class="column is-1 dflex1"> <span class="icon"><i id="search-btn" class="fa fa-search fa-2x"></i></span> </div> </div> </div> </div> </div>'
});

Vue.component('btnprev', {
    template:
    '<a class="button is-info is-outlined is-pulled-left is-medium"><i class="fa fa-chevron-left"></i>&nbsp;Anterior</a>'
});

Vue.component('btnnext', {
    template:
    '<a class="button is-info is-pulled-right is-medium">Próximo&nbsp;<i class="fa fa-chevron-right"></i></a>'
});

Vue.component('titulocadastro', {
    props: ['title', 'subtitle'],
    template:
    '<div class="mt5"> <h1 class="title">{{title}}</h1> <h2 class="subtitle">{{subtitle}}</h2></div>'
});

Vue.component('radiobtnc', {
    props: ['name','label', 'value', 'id'],
    template:
    '<input class="is-checkradio" {{id}} :value="label" type="radio" :name="name" v-model="radioButtonValue"><label for="">{{ label }}</label>'
});

Vue.component('inputc', {
    props: ['label'],
    template:
    `
    <div class="field">
    <label class="label" for="">{{ label }}</label>
    <div class="control">
       <input id="" name="" placeholder="" class="input">
       </div>
    </div>
    `
});

Vue.component('notificationc', {
    props: ['text'],
    template:
    '<div class="notification is-info"> <i class="fa fa-info-circle"></i>&nbsp;{{ text }}</div>'
});

Vue.component('navbarhome', {
    props: ['text'],
    template:
    `
   <header>
      <nav id="nav" class="navbar scroll is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
         <a class="navbar-item" href="#">
            <img src="/images/logo.png" height="100%">
         </a>

         <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
         </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
         <div class="navbar-end">
            <div class="navbar-item is-centered-touch">
               <div class="buttons is-centered">
                  <a href="/login" class="button is-light">
                     Login
                  </a>
                  <a href="/cadastro" class="button is-info">
                     <strong>Começar agora</strong>
                  </a>
               </div>
            </div>
         </div>
      </div>
      </nav>
   </header>
    `
});

Vue.component('navbarinternal', {
   props: ['text'],
   template:
   `
<header>
   <nav id="nav" class="navbar scroll is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
         <div class="navbar-brand">
            <span class="navbar-item" href="#">
               <img src="/images/logo.png" height="100%">
               <h1 class="is-hidden-mobile">&nbsp;&nbsp;<b></b></h1>
            </span>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> </a>
         </div>
         <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
               <div class="navbar-item has-dropdown is-hoverable is-mega">
                  <div id="mainmenu" class="navbar-link is-hidden-touch">Menu</div>
                  <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
                     <div class="container is-fluid">
                        <div class="columns">
                           <div class="column has-text-centered">
                              <!-- Copiar esta column para mais itens --> 
                              <a class="navbar-item" href="./../Login/">
                                 <div class="navbar-content">
                                    <p>Login</p>
                                 </div>
                              </a>
                              <a class="navbar-item" href="./../Cadastro/">
                                 <div class="navbar-content">
                                    <p>Cadastro</p>
                                 </div>
                              </a>
                              <a class="navbar-item" href="./../Dashboard/">
                                 <div class="navbar-content">
                                    <p>Minha conta</p>
                                 </div>
                              </a>
                           </div>
                           <!-- <div class="column has-text-centered">
                              Copiar esta column para mais itens
                              <a class="navbar-item" href="">
                                 <div class="navbar-content">
                                    <p>New feature: list of tags</p>
                                 </div>
                              </a>
                              <a class="navbar-item" href="">
                                 <div class="navbar-content">
                                    <p>New feature: list of tags</p>
                                 </div>
                              </a>
                              <a class="navbar-item" href="">
                                 <div class="navbar-content">
                                    <p>New feature: list of tags</p>
                                 </div>
                              </a>
                           </div> -->
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </div>
   </nav>
</header>
   `
});