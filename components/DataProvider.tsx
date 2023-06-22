'use client'

import React, { createContext, useContext } from "react";

export type TYPE = {
    "Sr. No." :string;
    "Name of Society": string ; 
    "Address":string ;
    "State":string ;
    "District":string ;
    "Date of Registration":string ;
    "Sector Type":string ;
    "Area of Operation":string;

}
export const initialData :TYPE[]= 
 [
{"Sr. No.":"1","Name of Society":"saharayn universal multipurose society limited","Address":"At & P.O. Railway Colony, Gorakkhpur, District-Gorakhpur Uttar Pradesh","State":"UTTAR PRADESH","District":"KUSHI NAGAR","Date of Registration":"","Area of Operation":"Haryana, Uttar Pradesh, Himachal Pradesh, Punjab","Sector Type":"Credit"},
{"Sr. No.":"2","Name of Society":"JMJ Multi State Agro Cooperative Society Ltd.","Address":"TC 48/1442-1, Sreeniva, Parekkati House, Chathankulangara Temple South, Puthurkkara, Ayyanthole, Thrissur 680003 Kerala","State":"KERALA","District":"","Date of Registration":"10/13/2022","Area of Operation":"Bihar, West Bengal, Odisha","Sector Type":"Agro"},
{"Sr. No.":"3","Name of Society":"Devbhoomi Agro Multi State Cooperative Society Ltd.","Address":"S/o Sateesh Kumar, Tejupur, Haridwar, Uttarakhand 247661","State":"UTTARAKHAND","District":"","Date of Registration":"10/04/2022","Area of Operation":"Tamil Nadu, Karnataka","Sector Type":"Agro"},
{"Sr. No.":"4","Name of Society":"Aarya Multi Specialty Cooperative Hospital and Hospital and Research Center ltd.","Address":"Gate No 165, Nimgaon (T), Madha, Solapur, 413210 maharashtra","State":"MAHARASHTRA","District":"","Date of Registration":"10/04/2022","Area of Operation":"Haryana, Punjab","Sector Type":"Health/Hospital"},
{"Sr. No.":"5","Name of Society":"Agriculture Development Cooperative Federation","Address":"A/P 344, Lower Ground Floor, Sector 86, Preet City, SAS Nagar, Mohali, Punjab\n160055","State":"PUNJAB","District":"","Date of Registration":"09/22/2022","Area of Operation":"Manipur, Meghalaya","Sector Type":"Federation"},
{"Sr. No.":"6","Name of Society":"Prosperity Multi State Housing Cooperative Society ltd.","Address":"Jayem Arcade 385 A6, First Floor,\nKamarajar Road, Peelamedu, Coimbatore 641004","State":"TAMIL NADU","District":"","Date of Registration":"09/15/2022","Area of Operation":"Maharashtra, Gujarat, Rajasthan","Sector Type":"Housing"},
{"Sr. No.":"7","Name of Society":"Greenfield Multi State Agro Allied and Marketing Cooperative Society Ltd. (GMAAMCS)","Address":"Plot No 92, H.No 4-487, New Balaji Nagar Colony, Meerpet, Behind Janapriya Apartments, Hyderabad 500097 Telangana","State":"Telangana","District":"","Date of Registration":"09/12/2022","Area of Operation":"Gujarat, Rajasthan","Sector Type":"Agro"},
{"Sr. No.":"8","Name of Society":"Shri Sharda Agro Multi State Co- operative Society Ltd.","Address":"Shri Sharda Agro Multi State Co-operative Society Ltd.","State":"UTTAR PRADESH","District":"","Date of Registration":"09/02/2022","Area of Operation":"Maharashtra,Goa,Karnataka, Andhra Pradesh","Sector Type":"Agro"},
{"Sr. No.":"9","Name of Society":"Nature Delight Multi State Cooperative Dairy & Agro Products Ltd.","Address":"Kalas Gate, No 1189, A/P Kalas, Indapur, Pune 413105 Maharashtra","State":"MAHARASHTRA","District":"","Date of Registration":"08/31/2022","Area of Operation":"Andhra Pradesh, Telangna","Sector Type":"Agro"},
{"Sr. No.":"10","Name of Society":"Travancore Cochin Tourism Cooperative Society Ltd","Address":"Idukki, Kerala 685584","State":"KERALA","District":"IDUKKI","Date of Registration":"08/31/2022","Area of Operation":"Madhya Pradesh, Chhatisgarh, Jharkhand, Bihar","Sector Type":"Tourism"},
{"Sr. No.":"11","Name of Society":"Janamaitheri Agricultural Cooperative Society Ltd.","Address":"Janamaitheri Agricultural Cooperative Society Ltd.","State":"KERALA","District":"THIRUVANANTHAPURAM","Date of Registration":"08/16/2022","Area of Operation":"Maharashtra, Gujarat, Rajasthan","Sector Type":"Agro"},
{"Sr. No.":"12","Name of Society":"Swaraj Multipurpose Federation of Cooperative Society Ltd","Address":"Shop No 2, Yadav Market, Opposite Radha Ballav mandir, Palla Chowk, Tilak Road,\nFaridabad 121001 Haryana","State":"HARYANA","District":"","Date of Registration":"08/16/2022","Area of Operation":"Gujarat, Rajasthan","Sector Type":"Federation"},
{"Sr. No.":"13","Name of Society":"Green Safe Multi State Agriculture Cooperative Society Ltd.","Address":"Coimbatore, Tamil Nadu","State":"TAMIL NADU","District":"COIMBATORE","Date of Registration":"08/12/2022","Area of Operation":"Haryana, Delhi","Sector Type":"Agro"},
{"Sr. No.":"14","Name of Society":"Mango Growers cooperative society Ltd. (MANCO)","Address":"Visakhapatnam","State":"ANDHRA PRADESH","District":"VISAKHAPATANAM","Date of Registration":"08/10/2022","Area of Operation":"Haryana, Delhi, Uttar Pradesh,","Sector Type":"Agro"},
{"Sr. No.":"15","Name of Society":"Srijan Krishi Vipnan Multi State Cooperative Society Ltd.","Address":"Lucknow","State":"UTTAR PRADESH","District":"LUCKNOW","Date of Registration":"07/29/2022","Area of Operation":"Uttrakhand, Himachal Pradesh, Jammu & Kashmir","Sector Type":"Agro"},
{"Sr. No.":"16","Name of Society":"Kamal Multispeciality Cooperative Hospital & Research center Ltd.","Address":"Beed Maharashtra","State":"MAHARASHTRA","District":"BEED","Date of Registration":"07/22/2022","Area of Operation":"Maharashtra, Gujarat, Rajasthan","Sector Type":"Health/Hospital"},
{"Sr. No.":"17","Name of Society":"Nagebaba Multi Specialty Cooperative Hospital and Research Center Ltd.","Address":"Ahmednagar","State":"MAHARASHTRA","District":"AHMEDNAGAR","Date of Registration":"06/24/2022","Area of Operation":"Haryana, Punjab, Rajasthan","Sector Type":"Health/Hospital"},
{"Sr. No.":"18","Name of Society":"The Urban Care Multi State Agro Cooperative Society Ltd.","Address":"Kerala","State":"KERALA","District":"KOZHIKODE","Date of Registration":"06/27/2022","Area of Operation":"Haryana, Rajasthan","Sector Type":"Agro"},
{"Sr. No.":"19","Name of Society":"Bharathikerkar Fishermen Cooperative Ltd. (BHARATHIKERKAR)","Address":"Kerala","State":"KERALA","District":"THRISSUR","Date of Registration":"06/27/2022","Area of Operation":"Gujarat, Rajasthan, Haryana, Delhi","Sector Type":"Fisheries"},
{"Sr. No.":"20","Name of Society":"Swayam Samruddhi Multi State Cooperative Society Ltd.","Address":"Hyderabad, Telangana","State":"TELANGANA","District":"HYDERABAD","Date of Registration":"06/15/2022","Area of Operation":"Kerala, Karnataka, Maharashtra, Gujarat","Sector Type":"Agro"},
{"Sr. No.":"21","Name of Society":"Shree Sai Seva Multi Specialty\nCooperative Hospital and Research center ltd","Address":"Ahmednagar, Maharashtra","State":"MAHARASHTRA","District":"AHMEDNAGAR","Date of Registration":"06/15/2022","Area of Operation":"Maharashtra, Karnataka, Tamil Nadu","Sector Type":"Health/Hospital"},
{"Sr. No.":"22","Name of Society":"Venkateshwara Multi State Multi Specialty Hospital and Research Ltd.","Address":"Maharashtra","State":"MAHARASHTRA","District":"NASIK","Date of Registration":"06/08/2022","Area of Operation":"Haryana, Gujarat, Maharashtra, Delhi","Sector Type":"Health/Hospital"},
{"Sr. No.":"23","Name of Society":"Bharathimanass labour and\nConstruction Cooperative Ltd.","Address":"Manipur","State":"MANIPUR","District":"BISHNUPUR","Date of Registration":"06/06/2022","Area of Operation":"West bengal, Andhra Pradesh","Sector Type":"Construction"},
{"Sr. No.":"24","Name of Society":"Kairali Agriculture Multi State Cooperative Society Ltd.","Address":"Kerala","State":"KERALA","District":"THRISSUR","Date of Registration":"06/06/2022","Area of Operation":"Maharashtra, Gujarat, Rajasthan","Sector Type":"Agro"}
]

const DataContext = createContext([
    {
        "Sr. No." :"",
        "Name of Society": "" , 
        "Address":"" ,
        "State":"" ,
        "District":"" ,
        "Date of Registration":"" ,
        "Sector Type":"" ,
        "Area of Operation":"",
    }]
    );
export default function DataProvider({children}:
    {children:React.ReactNode}){
            
    return (
        <DataContext.Provider value={initialData}>
            {children}
        </DataContext.Provider>
        
    )
    
}

export function useData(){
    return useContext(DataContext);
}