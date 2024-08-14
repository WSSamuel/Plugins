<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc44afdef992a832876d7ceaa17c33d01
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Carbon_Fields\\' => 14,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Carbon_Fields\\' => 
        array (
            0 => __DIR__ . '/..' . '/htmlburger/carbon-fields/core',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitc44afdef992a832876d7ceaa17c33d01::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitc44afdef992a832876d7ceaa17c33d01::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitc44afdef992a832876d7ceaa17c33d01::$classMap;

        }, null, ClassLoader::class);
    }
}
