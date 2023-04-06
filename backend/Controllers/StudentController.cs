using Microsoft.AspNetCore.Mvc;

namespace VisaCenterBackend.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
