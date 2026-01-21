import { useState } from "react";
import mplswanfortigate from '../assets/mplswanandfortigateinhq.png';

function ConfigBlock({ title, code }) {
  return (
    <div className="mb-4">
      <h5 className="font-semibold mb-1">{title}</h5>
      <pre className="bg-slate-900 text-green-400 p-3 rounded-lg text-xs overflow-x-auto">
        {code}
      </pre>
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        {/* Project Card */}
        <div className="group rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500">
          <div className="p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center">

            {/* Description */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  MPLS WAN with FortiGate Firewall
                </h3>
                <p className="text-sm font-medium text-blue-600">GNS3 Lab</p>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Enterprise MPLS WAN lab enforcing HQ firewall traversal before
                internet access. Branch traffic is routed through the MPLS core
                to HQ, inspected and NATed by a FortiGate firewall.
              </p>

              <div className="flex flex-wrap gap-2">
                {["GNS3", "MPLS", "FortiGate 7.4", "Routing", "Firewall Security"].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:border-blue-500 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 text-sm text-slate-700">
                <li> MPLS core simulating service provider network</li>
                <li> HQ default route forces traffic through FortiGate</li>
                <li> Stateful firewall inspection with NAT</li>
                <li> Verified using end-to-end ICMP</li>
              </ul>

              <button
                onClick={() => setOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                View Configs & Proof
              </button>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-slate-200">
              <img
                src={mplswanfortigate}
                alt="MPLS WAN with FortiGate Firewall"
                className="rounded-xl shadow-x"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal with Configs */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4 backdrop-blur-sm">
          <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl p-8 overflow-y-auto max-h-[90vh]">
            <button 
              onClick={() => setOpen(false)} 
              className="float-right text-slate-400 hover:text-slate-600 text-2xl font-bold hover:bg-slate-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <h4 className="text-2xl font-bold mb-6 text-slate-900">Device Configurations & Verification</h4>

            <ConfigBlock 
              title="R4 – Branch Router" 
              code={`hostname R4\nno ip domain-lookup\ninterface GigabitEthernet0/0\ndescription To MPLS Core (R2)\nip address 10.0.34.4 255.255.255.252\nno shutdown\ninterface GigabitEthernet0/1\ndescription Branch LAN\n ip address 192.168.4.1 255.255.255.0\n no shutdown\n\n! Default route → MPLS\nip route 0.0.0.0 0.0.0.0 10.0.34.3`}
            />

            <ConfigBlock 
              title="R3 – HQ Edge Router" 
              code={`hostname R3\nno ip domain-lookup\n\ninterface GigabitEthernet0/0\n description To MPLS Core (R2)\n ip address 10.0.23.3 255.255.255.252\n no shutdown\n\ninterface GigabitEthernet0/1\n description To FortiGate (Inside)\n ip address 172.16.1.1 255.255.255.252\n no shutdown\n\n! Route Branch LAN\nip route 192.168.4.0 255.255.255.0 10.0.23.2\n\n! FORCE firewall traversal\nip route 0.0.0.0 0.0.0.0 172.16.1.2`}
            />
            <ConfigBlock
              title="R2 – MPLS CORE Router"
              code={`hostname R2\nno ip domain-lookup\n\ninterface GigabitEthernet0/0\n description To HQ (R3)\n ip address 10.0.23.2 255.255.255.252\n no shutdown\n\ninterface GigabitEthernet0/1\n description To Branch (R4)\n ip address 10.0.34.3 255.255.255.252\n no shutdown\n\n! Static routing across MPLS\nip route 192.168.4.0 255.255.255.0 10.0.34.4\nip route 0.0.0.0 0.0.0.0 10.0.23.3\n`}
            />
            <ConfigBlock
              title="R1 – Internet Edge Router"
              code={`hostname R1\nno ip domain-lookup\ninterface GigabitEthernet0/0\n description Internet Segment\n ip address 203.0.113.1 255.255.255.0\n no shutdown\n\ninterface GigabitEthernet0/1\n description To MPLS Core (R2)\n ip address 10.0.1.1 255.255.255.252\n no shutdown\n\n! Return traffic route\nip route 192.168.4.0 255.255.255.0 10.0.1.2\n no shutdown\nip route 192.168.4.0 255.255.255.0 172.16.2.2`}
            />
            <ConfigBlock 
              title="FortiGate – HQ Firewall" 
              code={`config system interface\n edit "port1"\n  set alias "HQ_INSIDE"\n  set ip 172.16.1.2/30\n  set allowaccess ping\n next\n edit "port2"\n  set alias "WAN_INTERNET"\n  set ip 172.16.2.2/30\n  set allowaccess ping\n next\nend\n\nconfig router static\n edit 1\n  set dst 0.0.0.0/0\n  set gateway 172.16.2.1\n  set device "port2"\n next\nend\n\nconfig firewall policy\n edit 1\n  set name "HQ_TO_INTERNET"\n  set schedule "always"\n  set service "ALL"\n  set nat enable\n next\nend\n`} 
            />

            <ConfigBlock 
              title="Verification – Branch Ping" 
              code={`IP: 192.168.4.10\nGateWay: 192.168.4.1\n\nPC> ping 8.8.8.8\nPinging 8.8.8.8 with 32 bytes of data:\nReply from 8.8.8.8: bytes=32 time=26ms TTL=120\nReply from 8.8.8.8: bytes=32 time=19ms TTL=120\nReply from 8.8.8.8: bytes=32 time=12ms TTL=120\nReply from 8.8.8.8: bytes=32 time=9ms TTL=120\n\nPing statistics for 8.8.8.8:\n    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),\n\nApproximate round trip times in milli-seconds:\n    Minimum = 9ms, Maximum = 26ms, Average = 16ms`} 
            />
          </div>
        </div>
      )}
    </>
  );
}
