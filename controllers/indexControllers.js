exports.index = (req, res, next) => {
    res.render('index', { 
       
    });
  };
  
  exports.about = (req, res, next) => {
      res.render('about', { 
         
      });
  };
  
  exports.projects = (req, res, next) => {
    res.render('projects', { 
      //title: 'Hemali Pawar',
    //message: 'Hello, My name is Hemali Pawar. I am a proud housewife' 
    });
  };
  
  exports.services = (req, res, next) => {
    res.render('services', { 
     // title: 'Perlin Pawar',
    //message: 'Hello, My name is Perlin Pawar. I am in eighth grade' 
    });
  };
  
  exports.contact = (req, res, next) => {
    res.render('contact', { 
      //title: 'Simon Pawar',
    //message: 'Hello, My name is Simon Pawar. I am enrolled in Computer Programmer Analyst in Georgian College' 
    });
  };

  
