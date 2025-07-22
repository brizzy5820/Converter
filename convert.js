
 Tempdis.style.display="none"
 timedis.style.display="none"
lentdis.style.display="none"
energydis.style.display="none"
res1.style.display="flex"
res2.style.display="none"
res3.style.display="none"
res4.style.display="none"
resV.style.display="none"
res.style.display="none"

function drop(){
    if (tempp.selected){
        Tempdis.style.display="flex"
        energydis.style.display="none"
        timedis.style.display="none"
        lentdis.style.display="none"
        res1.style.display="none"
        res2.style.display="flex"
res3.style.display="none"
res4.style.display="none"
        resV.style.display="none"
res.style.display="none"

    }
   else if (pick.selected){
         Tempdis.style.display="none"
 timedis.style.display="none"
       energydis.style.display="none"
lentdis.style.display="none"
res1.style.display="flex"
res2.style.display="none"
       resV.style.display="none"
res3.style.display="none"
res4.style.display="none"
res.style.display="none"
    }
   else if (timee.selected){
        timedis.style.display="flex"
         Tempdis.style.display="none"
       energydis.style.display="none"
         lentdis.style.display="none"
         res1.style.display="none"
         res2.style.display="none"
       resV.style.display="none"
res3.style.display="none"
res4.style.display="none"
res.style.display="flex"
    }
     
    else if (lentt.selected){
        lentdis.style.display="flex"
          timedis.style.display="none"
         Tempdis.style.display="none"
        energydis.style.display="none"
         res2.style.display="none"
         res1.style.display="none"
res3.style.display="flex"
res4.style.display="none"
        resV.style.display="none"
res.style.display="none"
    }
      
   else if (ener.selected){
        energydis.style.display="flex"
         Tempdis.style.display="none"
       timedis.style.display="none"
         lentdis.style.display="none"
         res1.style.display="none"
         res2.style.display="none"
       res.style.display="none"
res3.style.display="none"
       resV.style.display="flex"
res4.style.display="none"
    }
}


function convat(){  

    res1.innerHTML=putt.value
// for Temperature


   if (cel.selected &&  kels.selected){
        res2.innerHTML= `${putt.value*1+273  } K`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
         }     
    else if (cel.selected&& fahrs.selected){
            res2.innerHTML= `${(putt.value*9/5)+32} F`
             } 
             else if (cel.selected&& cels.selected){
                res2.innerHTML= `${(putt.value)} C`
                 } 
                 
   if (fahr.selected &&  cels.selected){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    res2.innerHTML= `${(putt.value-32 )*5/9 } C`
     }
else if (fahr.selected&& kels.selected){
        res2.innerHTML= `${(putt.value*1-32)*5/9+273} K`
         }
         else if (fahr.selected&& fahrs.selected){
            res2.innerHTML= `${(putt.value)} F`
             }
         if (kel.selected &&  cels.selected){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            res2.innerHTML= `${(putt.value-273) } C `
             }
        else if (kel.selected && fahrs.selected){
                res2.innerHTML= `${(putt.value*1-273)*9/5+32} F`
            }
           else if (kel.selected &&  kels.selected){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                res2.innerHTML= `${(putt.value) } K `
                 }
            
        // For length
    // For Kilometer
        if (kmm.selected && mms.selected){
            res3.innerHTML=`${putt.value*1000} m`
        }
        else if (kmm.selected && cmms.selected){
            res3.innerHTML=` ${putt.value*100000} cm`
        }
        else if (kmm.selected && kmms.selected){
            res3.innerHTML=` ${putt.value} km`
        }
        else if (kmm.selected && mmms.selected){
            res3.innerHTML=` ${putt.value*1000000} mm`
        }
         //  For meters
        if (mm.selected && kmms.selected){
            res3.innerHTML=`${putt.value*1/1000} km`
        }
        else if (mm.selected && cmms.selected){
            res3.innerHTML=` ${putt.value*100} cm`
        }
        else if (mm.selected && mms.selected){
            res3.innerHTML=` ${putt.value} m`
        }
        else if (mm.selected && mmms.selected){
            res3.innerHTML=` ${putt.value*1000} mm`
        }
    // For centimeter
    if (cmm.selected && kmms.selected){
        res3.innerHTML=`${putt.value*1/100000} km`
    }
    else if (cmm.selected && mms.selected){
        res3.innerHTML=` ${putt.value*1/100} m`
    }
    else if (cmm.selected && cmms.selected){
        res3.innerHTML=` ${putt.value} cm`
    }
    else if (cmm.selected && mmms.selected){
        res3.innerHTML=` ${putt.value*10} mm`
}
//  For millimeters
 if (mmm.selected && kmms.selected){
        res3.innerHTML=`${putt.value*1/1000000} km`
    }
    else if (mmm.selected && mms.selected){
        res3.innerHTML=` ${putt.value*1/1000} m`
    }
    else if (mmm.selected && cmms.selected){
        res3.innerHTML=` ${putt.value*1/10} cm`
    }
    else if (mmm.selected && mmms.selected){
        res3.innerHTML=` ${putt.value} mm`
}
               
        // For energy
    // For Kilometer
        if (jol.selected && kjols.selected){
            resV.innerHTML=`${putt.value*1000} KJ`
        }
        else if (jol.selected && wats.selected){
            resV.innerHTML=` ${putt.value*100000} Wh`
        }
        else if (jol.selected && jols.selected){
            resV.innerHTML=` ${putt.value} J`
        }
        else if (jol.selected && kwats.selected){
            resV.innerHTML=` ${putt.value*1000000} kWh`
        }
         //  For meters
        if (kjol.selected && wats.selected){
            resV.innerHTML=`${putt.value*1/1000} Wh`
        }
        else if (kjol.selected && kwats.selected){
            resV.innerHTML=` ${putt.value*100} kWh`
        }
        else if (kjol.selected && kjols.selected){
            resV.innerHTML=` ${putt.value} KJ`
        }
        else if (kjol.selected && jols.selected){
            resV.innerHTML=` ${putt.value*1000} J`
        }
    // For centimeter
    if (wat.selected && kjols.selected){
        resV.innerHTML=`${putt.value*1/100000} KJ`
    }
    else if (wat.selected && kwats.selected){
        resV.innerHTML=` ${putt.value*1/100} kWh`
    }
    else if (wat.selected && wats.selected){
        resV.innerHTML=` ${putt.value} Wh`
    }
    else if (wat.selected && jols.selected){
        resV.innerHTML=` ${putt.value*10} J`
}
//  For millimeters
 if (kwat.selected && wats.selected){
        res3.innerHTML=`${putt.value*1/1000000} W`
    }
    else if (kwat.selected && jols.selected){
        res3.innerHTML=` ${putt.value*1/1000} J`
    }
    else if (kwat.selected && kjols.selected){
        res3.innerHTML=` ${putt.value*1/10} KJ`
    }
    else if (kwat.selected && kwats.selected){
        res3.innerHTML=` ${putt.value} kWh`
}
        // For time
    // For minute
            if (min.selected && secs.selected){
                res.innerHTML=`${putt.value*60} s`
            }
            else if (min.selected && hrs.selected){
                res.innerHTML=` ${putt.value*1/60} hrs`
            }
            else if (min.selected && days.selected){
                res.innerHTML=` ${putt.value*1/1440} days`
            }
            else if (min.selected && mins.selected){
                res.innerHTML=` ${putt.value} min`
            }
             else if (min.selected && wks.selected){
                res.innerHTML=` ${putt.value*1/10080} weeks`
            }
            else if (min.selected && monts.selected){
                res.innerHTML=` ${putt.value*1/43800} months`
            }
            else if (min.selected && yrs.selected){
                res.innerHTML=` ${putt.value*1/525600} yrs`
            }
        // For seconds
        if (sec.selected && mins.selected){
            res.innerHTML=`${putt.value*1/60} min`
        }
        else if (sec.selected && hrs.selected){
            res.innerHTML=` ${putt.value*1/3600} hrs`
        }
        else if (sec.selected && secs.selected){
            res.innerHTML=` ${putt.value} s`
        }
        else if (sec.selected && days.selected){
            res.innerHTML=` ${putt.value*1/86400} days`
        }

         else if (sec.selected && wks.selected){
            res.innerHTML=` ${putt.value*1/604800} weeks`
        }
        else if (sec.selected && monts.selected){
            res.innerHTML=` ${putt.value*1/2628000} months`
        }
        else if (sec.selected && yrs.selected){
            res.innerHTML=` ${putt.value*1/31536000} yrs`
        }
    // For Hour
    if (hr.selected && mins.selected){
        res.innerHTML=`${putt.value*1*60} min`
    }
    else if (hr.selected && secs.selected){
        res.innerHTML=` ${putt.value*1*3600} s`
    }
    else if (hr.selected && hrs.selected){
        res.innerHTML=` ${putt.value} hr`
    }
    else if (hr.selected && days.selected){
        res.innerHTML=` ${putt.value*1/24} days`
    }

     else if (hr.selected && wks.selected){
        res.innerHTML=` ${putt.value*1/168} weeks`
    }
    else if (hr.selected && monts.selected){
        res.innerHTML=` ${putt.value*1/730} months`
    }
    else if (hr.selected && yrs.selected){
        res.innerHTML=` ${putt.value*1/8760} yrs`
    }
// For days
if (day.selected && mins.selected){
    res.innerHTML=`${putt.value*1*1440} min`
}
else if (day.selected && hrs.selected){
    res.innerHTML=` ${putt.value*1*24} hrs`
}
else if (day.selected && secs.selected){
    res.innerHTML=` ${putt.value*1*86400} secs`
}
else if (day.selected && days.selected){
    res.innerHTML=` ${putt.value} days`
}

else if (day.selected && wks.selected){
    res.innerHTML=` ${putt.value*1/7} weeks`
}
else if (day.selected && monts.selected){
    res.innerHTML=` ${putt.value*1/30.44} months`
}
else if (day.selected && yrs.selected){
    res.innerHTML=` ${putt.value*1/365} yrs`
}
// For Weeks
if (wk.selected && mins.selected){
    res.innerHTML=`${putt.value*1*10080} min`
}
else if (wk.selected && hrs.selected){
    res.innerHTML=` ${putt.value*1*168} hrs`
}
else if (wk.selected && secs.selected){
    res.innerHTML=` ${putt.value*1*604800} secs`
}
else if (wk.selected && wks.selected){
    res.innerHTML=` ${putt.value} weeks`
}
else if (wk.selected && days.selected){
    res.innerHTML=` ${putt.value*1*7} days`
}
else if (wk.selected && monts.selected){
    res.innerHTML=` ${putt.value*1/4.35} months`
}
else if (wk.selected && yrs.selected){
    res.innerHTML=` ${putt.value*1/52.14} yrs`
}
// For Months
if (mont.selected && mins.selected){
    res.innerHTML=`${putt.value*1*30.44*1440} min`
}
else if (mont.selected && hrs.selected){
    res.innerHTML=` ${putt.value*1*30.44*24} hrs`
}
else if (mont.selected && secs.selected){
    res.innerHTML=` ${putt.value*1*30.44*86400} secs`
}
else if (mont.selected && monts.selected){
    res.innerHTML=` ${putt.value} months`
}

else if (mont.selected && wks.selected){
    res.innerHTML=` ${putt.value*30.44/7} weeks`
}
else if (mont.selected && days.selected){
    res.innerHTML=` ${putt.value*1*30.44} days`
}
else if (mont.selected && yrs.selected){
    res.innerHTML=` ${putt.value*1/12} yrs`
}
// For years
if (yr.selected && mins.selected){
    res.innerHTML=`${putt.value*365*1440} min`
}
else if (yr.selected && hrs.selected){
    res.innerHTML=` ${putt.value*365*24} hrs`
}
else if (yr.selected && secs.selected){
    res.innerHTML=` ${putt.value*365*86400} secs`
}
else if (yr.selected &&yrs.selected){
    res.innerHTML=` ${putt.value} yrs`
}
else if (yr.selected && wks.selected){
    res.innerHTML=` ${putt.value*1*365/7} weeks`
}
else if (yr.selected && monts.selected){
    res.innerHTML=` ${putt.value*1*12} months`
}
else if (yr.selected && days.selected){
    res.innerHTML=` ${putt.value*1*365} days`
}
}
