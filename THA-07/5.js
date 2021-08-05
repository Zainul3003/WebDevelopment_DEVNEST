function Cylinder(cyl_h,cyl_r)
{
    return cyl_h*cyl_r*cyl_r*Math.PI;
}

var cyl=Cylinder(7,2);
console.log(cyl.toFixed(4));
