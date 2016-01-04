using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace GcseChineseClient.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public IActionResult SandBox()
        {
            ViewData["Message"] = "Sand box";

            return View();
        }

        public IActionResult Assessments()
        {
            ViewData["Message"] = "GCSE Chinese Assessments";

            return View();
        }

        public IActionResult Exampapers()
        {
            ViewData["Message"] = "GCSE Chinese Exam Papers";

            return View();
        }

        public IActionResult Themes()
        {
            ViewData["Message"] = "GCSE Chinese Controlled Assessment Themes";

            return View();
        }

        public IActionResult Topics()
        {
            ViewData["Message"] = "GCSE Chinese Controlled Assessment Topics";

            return View();
        }
    }
}
