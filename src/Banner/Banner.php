<?php


namespace UConn\Banner;

class Banner {

    private $name;
    private $department;
    private $url;
    private $header;
    private $search;

    public function __construct() {

        // Load the defaults
        $data = file_get_contents(dirname(__FILE__) . '/../../_config.yml');
        $settings = \Symfony\Component\Yaml\Yaml::parse($data);

        $this->name =       $settings['name'];
        $this->department = $settings['department'];
        $this->url =        $settings['department_url'];
        $this->header =     $settings['show_header'];
        $this->search =     $settings['search'];
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
                'department_url'    => $this->url,
                'show_header'       => $this->header,
                'search'            => $this->search
            )
        );
    }

    // public static function to bypass constructor

    public function __toString(){

        $liquid = new \Liquid\Template();

        return $liquid->parse(file_get_contents(dirname(__FILE__) . '/../../_includes/banner.html'))->render($this->buildVars());

    }


}
