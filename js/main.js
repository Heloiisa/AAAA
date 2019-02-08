new Vue({
	el: '#main'
});

new Vue({
	el: '#dash'
});

new Vue({
	el: '#home'
});

new Vue({
	el: '#login',
	data: {
		modal:true,
		certificates: [],
		certEncoding: '',
		accessToken: 'RI2ra_ZXJKff9E0krMyEWyFsJ5Ucv6hYuL97LYd3l-aNduy56SWyYklP3hwJ49b-ggnj_snOPzpp6oGmKeg98yl3uznC8nlzuIPoVrwz0FGBsicNwFLTqL4O4ZPZjLfV9hM2rTKYk7yj-gWBPJ8CSy5I39eeU0W3hIpdsCnJ7Rb-sWItS3sWQ4LcRHsH9LO_um2n8GAWrqzQlBYBKrO1INuNMAojLGd9s4kEtXYOcqfg9o9ID7Ip6AHr0i_ASoIyAVBvezF4LMfRDOyt9Tonocd_DD9-fssALOsDf6wvBWxdYlIgJZIP1C19NR9uEc3nfWaE9VxzRLm4ris67jy4mnyJWe9jejuPhHf76dV3PqeZ8wWIKzrAcrC8xjGj4lVrmpXs-2npxfTNXrYun6q2Aip1HvcMfFCNCfL9l8z8IU31-C9tPUaGU6ueQe5q4lf5vxMGBYWdj4t6INZJNCVzYo3IQs44yqlT_4JnbMFSthMU6yMT1NflSJ0tfbf6TI-CcebdYw',
		token: '',
		access: false,
		selectedCert: [],
	},
	created: function() {
		this.init();
	},
	methods: {
		login: function(r) {
			var self = this
			console.log(r)
			axios.post(Vue.config.ApiURL+'usuario/login', {'certificado': self.selectedCert.thumbprint}).then(function(res) {
				if(res.data.status) {
					self.$session.start()
					self.$session.set('nome_usuario', self.selectedCert.subjectName)
					self.$session.set('authenticated', true)
					self.$session.set('token', r)
					axios.defaults.headers.common.Authorization = 'Token ' + res.data.success.token
					self.verifyIfAuthenticated()
				}
			}).catch(function(err){
					if(err.response.status == 401){
						swal('Usuário não cadastrado', {
							buttons: {
								catch: "Cadastrar",
								cancel: "Cancelar",
							}
						}).then(function(value) {
							switch (value) {
								case "catch":
									self.$router.push('/registro');
									break;
							}
						})
					} else {
						this.$swal('Ops', "Alguma coisa deu errado! Entre em contato com o administrador ou tente novamente mais tarde", "error")
					}
			})
		},
		init: function() {
			pki.init(this.loadCertificates);
		},
		refresh: function() {
			this.loadCertificates();
		},
		loadCertificates: function() {
			var self = this
			pki.listCertificates({
				filter: pki.isWithinValidity
			}).success(function (certs) {
				self.certificates = certs
			});
			//console.clear();
		},
		info: function(selectedCert) {
			var self = this
			console.log(selectedCert)
			return
			this.selectedCert = selectedCert;
			pki.readCertificate(selectedCert.thumbprint).success(function (certEncoding) {
				self.certEncoding = certEncoding
				self.sign()
			});
		},
		sign: function() {
			var self = this
			axios.get('http://localhost:8000/authenticationStart').then(function(res){
				console.log(res)
					pki.signWithRestPki({
						 token: res.data.token,
						 thumbprint: self.selectedCert.thumbprint
					}).success(function (res) {
						 self.login(res)
					});
				})
		},
	}
});
new Vue({
	el: '#xmlimport'
});
new Vue({
	el: 'termo',
	data:{
		modalTermosActive: false
	}
});

const app = new Vue({
	el:'#cad',
	data: {
		step:1,
		fisica: true,
		dados: {
			telephones:{},
			emails: {},
			entity:{},
			userInfoModel:{
				address: {},
			},
		},
		modalTermosActive: false
	},
	methods:{
	  prev: function() {
		this.step--;
	  },
	  next:function() {
		this.step++;
	  },
	  submit:function() {

		var config = {
			headers: { 
				'Content-Type': 'application/json',
				'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjlmODU5ODc4LTE1MDMtNDdiMS04YWJjLWZiNzliZGUwNTA1YyIsIm5iZiI6MTU0OTY0NDUxMCwiZXhwIjoxNTQ5NjQ4MTEwLCJpYXQiOjE1NDk2NDQ1MTB9.IcyTXSI3CRCLc6MwcBu-7cgq2BN-4rmIFbG4GjjeqeE',
				'UAuthorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6WyIwNTQzNDE2MDk3NSIsIjA1NDM0MTYwOTc1Il0sImp0aSI6IjZhZDBmYWFlLWU1YjMtNDBlZi1hZGMzLTc1YzU1NGI1ZTQ3YSIsIm5iZiI6MTU0OTY0NDU0NCwiZXhwIjoxNTgxMTgwNTQ0LCJpYXQiOjE1NDk2NDQ1NDR9.SCRpFdvaazzbSLDeBZ-Des48eWQ33zNA_2igQMUjuUw'
			},
		  };

		  console.log(this.dados);
		axios.post('https://ieptb-api.azurewebsites.net/api/0.01/members/saveuser', this.dados, config)
		.then(response => {
	
			alert("Cadastro efetuado com sucesso!!!");
			
		})
	}

	}
  });


//  Auto hide navbar ///////////////////////////////////////////////

function SlidingHeader(options) {
this.init(options);
}

SlidingHeader.prototype.init = function(options) {
// Define the settings as an object
var settings = {
	element: options.element,
	class: 'to_scroll'
}

// If the target element has a specific class declared in the object passed,
// replace the default class key in settings object
if (options.class) {
	settings.class = options.class;
}

// Get the target element from the DOM
var elementToSlide = document.querySelector(settings.element);

// If there's a valid element, slide it. If not, just return false
if (elementToSlide != null) {
	var elementSettings = {
		elementHeight: elementToSlide.clientHeight,
		class: settings.class
	}

	this.slide(elementToSlide, elementSettings);
} else {
	return false;
}
}

SlidingHeader.prototype.slide = function(element, elementSettings) {

var offset = 0,
	lastPosition = 0,
	targetClass = elementSettings.class,
	elementHeight = elementSettings.elementHeight;

window.addEventListener('scroll', function(e) {

	var newPosition = this.scrollY,
		position = newPosition - lastPosition;

	// If we scrolled more than the element's height, then add the class to it.
	// Else, remove it, and the element will show up again
	if (offset + position > elementHeight) {
		offset = elementHeight;

		if (!element.classList.contains(targetClass)) {
			element.className = element.className + targetClass;
		}
	} else {
		offset = offset + position;

		if (element.classList.contains(targetClass)) {
			element.className = '';
		}
	}

	if (offset < 0) {
		offset = 0;
	}

	lastPosition = newPosition;

});
};

var slidingHeader = new SlidingHeader({
element: 'header',
class: 'scrolled'
});

//  Smooth Scroll on click ///////////////////////////////////////////////

function ScrollDown() {
var elmnt = document.getElementById("tiles");
elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
};


//  Searchbar ///////////////////////////////////////////////

function myFunction() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("searchbar");
	filter = input.value.toUpperCase();
	ul = document.getElementById("columns");
	li = ul.getElementsByTagName("column");
	for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("card")[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
			} else {
					li[i].style.display = "none";
			}
	}
}

//  Change navbar color on scroll ///////////////////////////////////////////////

//   var body = document.body;
//   var html = document.documentElement;

//   var myNav = document.getElementById("nav");

//   window.onscroll = function() {
// 	"use strict";
// 	if (document.body.scrollTop >= 270 || document.documentElement.scrollTop >= 280) {
// 	  myNav.classList.add("scroll");
// 	} else {
// 	  myNav.classList.remove("scroll");
// 	}
//   };
