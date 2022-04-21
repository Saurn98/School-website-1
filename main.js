width = screen.width;
height = screen.height;
if (width < 992)
    {
        line = "<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>";
        lines = "<a class='navbar-brand' href='#'>Gurukul Grammar Senior Secondary School</a>";
        liness = "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button>";
        linesss = "<div class='collapse navbar-collapse' id='navbarNavAltMarkup'>";
        linessss = "<div class='navbar-nav'><a class='nav-item nav-link active' href='#'>Campus Life  </a><a class='nav-item nav-link active' href='#'>Achievements  </a><a class='nav-item nav-link active' href='#'>What's New  </a><a class='nav-item nav-link active' href='#'>Alumni  </a><a class='nav-item nav-link active' href='#'>Contact US  </a></div>";
        linesssss = "</div></nav></div>";
        output = line + lines + liness + linesss + linessss + linesssss;
        document.getElementById("nav").innerHTML = output;
    } 