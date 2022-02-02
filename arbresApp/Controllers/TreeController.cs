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

        [HttpGet("{id}")]
        public IEnumerable<Tree> Get(string id)
        {
            var list = this.trees;
            var query =
                from tree in list
                where tree.recordid == id
                select tree;

            IEnumerable<Tree> trees = query;
            return trees;
        }

        [HttpGet("filtreName/{libel}")]
        public IEnumerable<Tree> GetFiltreName(string libel)
        {
            var list = this.trees;
            var query =
                from tree in list
                where tree.fields.libellefrancais.Contains(libel, StringComparison.InvariantCultureIgnoreCase)
                select tree;

            IEnumerable<Tree> trees = query;
            return trees;
        }

        [HttpGet("trier/{etat}")]
        public IEnumerable<Tree> GetTrier(string etat)
        {
            var list = this.trees;
            var query =
                from tree in list
                select tree;
            
            if (etat == "asc")
            {
                query =
                    from tree in list
                    orderby tree.fields.dateplantation
                    select tree;
            }
            else if (etat == "desc")
            {
                query =
                    from tree in list
                    orderby tree.fields.dateplantation descending
                    select tree;
            }

            IEnumerable<Tree> trees = query;
            return trees;
        }
    }
}