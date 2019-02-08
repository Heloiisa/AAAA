using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CentralDuplicatas.Models;

namespace CentralDuplicatas.Controllers
{
    [Route("Certificado")] 

    public class CertificateController : Controller
    {
        
        public IActionResult Certificate()
        {
            return View();
        }
       
     
    }
}
