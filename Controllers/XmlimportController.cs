using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


namespace CentralDuplicatas.Controllers
{

[Route("Lista")] 

    public class xmlimportController : Controller
    {
        public IActionResult Xmlimport()
        {
            return View();
        }
    }
}

