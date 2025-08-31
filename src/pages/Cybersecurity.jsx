import React from 'react'
import { Link } from 'react-router-dom'

const Cybersecurity = () => {
  return (
    <>
    {/* Offer 1 */}
      <div className="bg-white border rounded-lg p-4">
    <h3 className="text-lg font-bold mb-2">Surfshark</h3>
    <img src="https://surfsharkvpnreview2021.weebly.com/uploads/1/3/8/2/138248648/unnamed-1_orig.png" alt="" className='w-70 h-25' />
    <p>Surfshark provides top-notch VPN services, helping users maintain privacy and security online. Their Antivirus software defends against viruses and malware, and Incogni removes personal data from data brokers and keeps track of data breaches. Choose between monthly or yearly subscription plans.</p>
    <Link to="https://get.surfshark.net/aff_c?offer_id=926&aff_id=39729" className="block bg-blue-600 text-white text-center py-2 rounded mt-4">Join Now</Link>
  </div>

    {/* Offer 2 */}


    {/* <div className="bg-white border rounded-lg p-4">
    <h3 className="text-lg font-bold mb-2"> Cybersecurity offer 2</h3>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjryC__w5W7qqVkw8wmLh914my0tHoUNaeA&s" alt="" className='w-70 h-10' />
    <p>Get a fast VPN service that improves your security, encrypts your traffic, and shields your IP and virtual location.</p>
    <a href="#" className="block bg-blue-600 text-white text-center py-2 rounded mt-4">Join Now</a>
  </div> */}

    </>
  )
}

export default Cybersecurity
