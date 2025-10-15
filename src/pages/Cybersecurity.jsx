import React from 'react'
import { Link } from 'react-router-dom'

const Cybersecurity = () => {
  return (
    <>
    {/* Offer 1 */}
      <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            1
          </div>
          <h3 className="text-lg font-bold">Surfshark</h3>
        </div>{" "}
    {/* <h3 className="text-lg font-bold mb-2">Surfshark</h3> */}
    <img src="https://surfsharkvpnreview2021.weebly.com/uploads/1/3/8/2/138248648/unnamed-1_orig.png" alt="" className='w-70 h-25' />
    <p>Surfshark provides top-notch VPN services, helping users maintain privacy and security online. Their Antivirus software defends against viruses and malware, and Incogni removes personal data from data brokers and keeps track of data breaches. Choose between monthly or yearly subscription plans.</p>
    <Link to="https://get.surfshark.net/aff_c?offer_id=926&aff_id=39729" className="block bg-blue-600 text-white text-center py-2 rounded mt-4">Join Now</Link>
  </div>

    {/* Offer 2 */}


  <div className="bg-white border rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
            2
          </div>
          <h3 className="text-lg font-bold">NordVPN</h3>
        </div>{" "}
    <img src="https://solutionsreview.com/wireless-network/files/2021/09/VPN-Nord.jpg" alt="" className='w-70 h-25' />
    <p>Get a fast VPN service that improves your security, encrypts your traffic, and shields your IP and virtuall location.</p>
    <Link to="https://go.nordvpn.net/aff_c?offer_id=24&aff_id=112089&url_id=25146" className="block bg-blue-600 text-white text-center py-2 rounded mt-4">Join Now</Link>
  </div>

    </>
  )
}

export default Cybersecurity
