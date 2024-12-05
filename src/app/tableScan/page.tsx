"use client";
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';

const Page = () => {

  const [scanResult, setScanResult] = useState<string | null>(null);

  useEffect(() =>{
    const scanner = new Html5QrcodeScanner('reader', {
        qrbox:{
            width: 350,
            height: 350,
        }, 
        fps: 5
      },
        false);
    
      scanner.render(success, error);
    
      function success(result: string){
        scanner.clear()
        setScanResult(result);
    
      }
    
      function error(err: any){
        console.warn(err)
        
      }
  }, []);

  return (
    <div className=''>
        {scanResult
        ? <div className=""> Success: <a href={"http://"+scanResult}>{scanResult}</a></div>
        :  <div id="reader" className=""></div>
        
        }
       
    </div>
  )
}

export default Page