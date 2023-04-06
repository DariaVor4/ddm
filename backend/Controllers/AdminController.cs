using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace VisaCenterBackend.Controllers
{
    [Authorize]
    public class AdminController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Login(string ReturnUrl)
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public IActionResult Login(LoginViewModel model = null!)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }
            //await HttpContent.SignInAsync("Cookie", clinePrincipal);
            return View();
        }
    }

    public class LoginViewModel
    {
        [Required]
        public string Login { get; set; } = null!;
        [Required]
        public string Password { get; set; } = null!;
        [Required]
        public string ReturnUrl { get; set; } = null!;
    }
}
