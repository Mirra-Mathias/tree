using System;
using System.Collections.Generic;


namespace arbresApp
{
    public class Field
    {
        public string libellefrancais { get; set; }
        public double circonferenceencm { get; set; }
        public double hauteurenm { get; set; }
        public string stadedeveloppement { get; set; }
        public DateTime dateplantation { get; set; }
    }
    public class Tree
    {
        public string datasetid { get; set; }
        public string recordid{ get; set; }
        
        public Field fields { get; set; }
        
        public string domanialite { get; set; }
    }

    public class Record
    {
        public Tree[] records { get; set; }
    }
}