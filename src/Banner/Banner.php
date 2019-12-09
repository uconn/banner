<?php


namespace UConn\Banner;

class Banner {

    private $name;
    private $department;
    private $department_abbreviation;
    private $url;
    private $header;
    private $search;
    private $alternative;

    public function __construct() {

        // Load the defaults. See https://packagist.org/packages/mustangostang/spyc
        $settings = spyc_load_file(dirname(__FILE__) . '/../../_data/config.yml');

        $this->name =       $settings['name'];
        $this->department = $settings['department'];
        $this->department_abbreviation = $settings['department_abbreviation'];
        $this->url =        $settings['department_url'];
        $this->header =     $settings['show_header'];
        $this->search =     $settings['search'];
        $this->alternative = $settings['alternative'];
    }

    public function __set($index, $val){
        if(property_exists($this, $index)){
            $this->$index = $val;
        }
    }

    public function __get($index){
        if(property_exists($this, $index)){
            return $this->$index;
        }
    }

    private function buildVars(){
        return array(
            'site' => array(
                'name'              => $this->name,
                'department'        => $this->department,
                'department_abbreviation' => $this->department_abbreviation,
                'department_url'    => $this->url,
                'show_header'       => $this->header,
                'search'            => $this->search,
                'alternative'       => $this->alternative
            )
        );
    }

    // public static function to bypass constructor

    public function __toString(){

        $liquid = new \Liquid\Template();

        return $liquid->parse(file_get_contents(dirname(__FILE__) . '/../../_includes/banner.html'))->render($this->buildVars());

    }

    /**
     * Outputs the CSS for the banner.
     * Sometimes it's necessary to retrieve the CSS
     * instead of including it, depending on where the
     * /vendor directory resides and whether it's
     * publicly accessible.
     * @return string CSS rules for the banner
     */
    public function css(){
        return file_get_contents(dirname(__FILE__) . '/../../_site/banner.css');
    }


}
