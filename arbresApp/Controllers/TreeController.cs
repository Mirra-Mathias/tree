using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Xml.Linq;
using System.Xml.Serialization;
using Microsoft.AspNetCore.Mvc;

public class App
{
    public string link { get; set; }
}

namespace arbresApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TreeController : Controller
    {

        private Tree[] trees;

        public TreeController()
        {
            string json = System.IO.File.ReadAllText(@"Data\app.json");
            App jso = JsonSerializer.Deserialize<App>(json);
            var arbrestring = new WebClient().DownloadString(jso.link);
            Record rec = JsonSerializer.Deserialize<Record>(arbrestring);
            trees = rec.records;
        }

        [HttpGet]
        public IEnumerable<Tree> Get()
        {
            IEnumerable<Tree> trees = this.trees;
            return trees;
        }
        
        public IEnumerable<Tree> Get(int id)
        {
            IEnumerable<Tree> trees = this.trees;
            return trees;
        }
    }
}