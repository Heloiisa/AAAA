using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace CentralDuplicatas.Controllers
{

[Route("Cadastro")] 

    public class CadController : Controller
    {
        public IActionResult Cad()
        {
            return View();
        }
    }
}

