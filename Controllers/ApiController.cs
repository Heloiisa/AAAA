using System;
using System.Net;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CentralDuplicatas.Models;

namespace CentralDuplicatas.Controllers
{
 [Route("api")]

 public class ApiController : Controller
 {
     /*
     [HttpGet("token")]
     public JsonResult Token() {
         var response = new WebClient().DownloadString("https://ieptb-api.azurewebsites.net/api/authentication/token");
         System.session['token'] = response['token'];
         return Json(response);
     }

     [HttpGet("login")]
     public JsonResult Login() {
         var client = new httpClient();
         client.BaseAddress = new Uri("https://ieptb-api.azurewebsites.net/");
         client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", ['token']);
         var response = client.PostAsJsonAsync("api/authentication/login", svm).Result;
         return Json(response);
     }
 
  */
         
 }
}