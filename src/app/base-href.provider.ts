// export function getBaseLocation() {
//    // const paths: string[] = location.pathname.split('/').splice(1, 1);
//     const basePath: string = 'home-page'; 
//   //  console.log(basePath);
//     return '/' + basePath;
// }

export function getBaseUrl() {
    const base = document.getElementsByTagName('base')[0].href;
 console.log(base);
    return base;
}   
