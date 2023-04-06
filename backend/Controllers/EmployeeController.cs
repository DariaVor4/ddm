using Microsoft.AspNetCore.Mvc;

namespace VisaCenterBackend.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
