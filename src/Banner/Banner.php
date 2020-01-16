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
    private $a_z_dropdown;
    private $a_z_url;
    private $use_mobile_menu;
    private $mobile_menu_id;
    private $invert_banner_color;

    public function __construct() {

        // Load the defaults. See https://packagist.org/packages/mustangostang/spyc
        $settings = spyc_load_file(dirname(__FILE__) . '/../../_config.yml');

        $this->name =       $settings['name'];
        $this->department = $settings['department'];
        $this->department_abbreviation = $settings['department_abbreviation'];
        $this->url =        $settings['department_url'];
        $this->header =     $settings['show_header'];
        $this->search =     $settings['search'];
        $this->alternative = $settings['alternative'];
        $this->a_z_dropdown = $settings['a_z_dropdown'];
        $this->a_z_url = $settings['a_z_url'];
        $this->use_mobile_menu = $settings['use_mobile_menu'];
        $this->mobile_menu_id = $settings['mobile_menu_id'];
        $this->invert_banner_color = $settings['invert_banner_color'];
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
                'alternative'       => $this->alternative,
                'a_z_dropdown'      => $this->a_z_dropdown,
                'a_z_url'           => $this->a_z_url,
                'use_mobile_menu'   => $this->use_mobile_menu,
                'mobile_menu_id'    => $this->mobile_menu_id,
                'invert_banner_color' => $this->invert_banner_color
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

    public function js() {
        return file_get_contents(dirname(__FILE__) . '/../../_site/js/banner.js');
    }

}
