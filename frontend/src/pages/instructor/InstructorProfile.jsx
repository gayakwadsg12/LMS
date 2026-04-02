import { useState } from "react";
import { Search, Upload, Bell, Settings, Shield, Mail, Globe, Save, X, Users, BookOpen, Wallet, BarChart3, GraduationCap } from "lucide-react";

const Avatar = () => (
  <div className="w-[64px] h-[64px] rounded-[8px] bg-gradient-to-br from-[#5b3df6] to-[#2dd4bf] flex items-center justify-center text-white text-[20px] font-bold flex-shrink-0 shadow-md">
    RM
  </div>
);

const Badge = ({ children, color = "blue" }) => {
  const colors = {
    blue: "bg-[#e8f5ff] text-[#5b3df6]",
    green: "bg-[#2dd4bf] text-[#023b33]",
    purple: "bg-[#e8f5ff] text-[#5b3df6]",
  };
  return (
    <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${colors[color]}`}>
      {children}
    </span>
  );
};

const Toggle = ({ enabled, onChange }) => (
  <button
    onClick={() => onChange(!enabled)}
    className={`relative inline-flex h-[24px] w-[44px] items-center rounded-full transition-colors duration-200 focus:outline-none ${
      enabled ? "bg-[#5b3df6]" : "bg-[#f1f5f9]"
    }`}
  >
    <span
      className={`inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow transition-transform duration-200 ${
        enabled ? "translate-x-[22px]" : "translate-x-[3px]"
      }`}
    />
  </button>
);

const InfoField = ({ label, value }) => (
  <div className="bg-[#f8fafc] rounded-[8px] p-[12px] border border-black/[0.08]">
    <p className="text-[11px] text-[#94a3b8] mb-[4px]">{label}</p>
    <p className="text-[13px] font-medium text-[#0f172a]">{value}</p>
  </div>
);

const ActivityItem = ({ icon, title, subtitle, badge, badgeColor }) => (
  <div className="flex items-start gap-[12px] py-[12px] border-b border-black/[0.08] last:border-0">
    <div className="w-[32px] h-[32px] rounded-[6px] bg-[#e8f5ff] flex items-center justify-center text-[#5b3df6] flex-shrink-0 text-[14px]">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-[13px] font-semibold text-[#0f172a]">{title}</p>
      <p className="text-[11px] text-[#94a3b8] mt-[4px]">{subtitle}</p>
    </div>
    {badge && (
      <span
        className={`inline-flex h-[24px] items-center px-[8px] rounded-[10px] text-[10px] font-medium ${
          badgeColor === "green"
            ? "bg-[#2dd4bf] text-[#023b33]"
            : "bg-[#f1f5f9] text-[#64748b]"
        }`}
      >
        {badge}
      </span>
    )}
  </div>
);

export default function ProfileSettings() {
  const [prefs, setPrefs] = useState({
    email: true,
    mobile: true,
    quiet: false,
  });

  const togglePref = (key) => setPrefs((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        {/* Hero card */}
        <div className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-[16px]">
              <Avatar />
              <div>
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <Badge color="blue">🛡 Owner account</Badge>
                </div>
                <h2 className="text-[28px] font-bold text-[#0f172a]">Rahul Mehta</h2>
                <p className="text-[14px] text-[#94a3b8] mt-[4px] max-w-md">
                  Manage your personal details, security, notification preferences, and account visibility across the institute workspace.
                </p>
              </div>
            </div>
            <button className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
              <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">✏️ Edit profile</div>
            </button>
          </div>
        </div>

        {/* Workspace access */}
        <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
          <div className="flex items-center justify-between w-full">
            <div>
              <h3 className="font-bold text-[18px] text-[#0f172a]">Workspace access</h3>
              <p className="text-[13px] text-[#94a3b8] mt-[4px]">Your current institute ownership and access scope</p>
            </div>
            <button className="border border-black/[0.08] flex items-center gap-[8px] h-[36px] justify-center px-[14px] rounded-[6px] bg-white">
              <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#0f172a] text-[12px]">Review permissions</div>
            </button>
          </div>
          <div className="grid grid-cols-4 gap-[16px] w-full">
            {[
              { label: "Managed teams", value: "6" },
              { label: "Institute role", value: "Owner" },
              { label: "Permissions", value: "Full access" },
              { label: "Last updated", value: "2d ago" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#f8fafc] rounded-[8px] p-[14px] border border-black/[0.08]">
                <p className="text-[11px] text-[#94a3b8] mb-[4px]">{label}</p>
                <p className="text-[20px] font-bold text-[#0f172a]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal info + Security */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
          {/* Personal Information */}
          <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
            <div className="flex items-center justify-between w-full">
              <div>
                <h3 className="font-bold text-[18px] text-[#0f172a]">Personal information</h3>
                <p className="text-[13px] text-[#94a3b8] mt-[4px]">Core profile details shown across your institute workspace</p>
              </div>
              <button className="border border-black/[0.08] flex items-center gap-[8px] h-[36px] justify-center px-[14px] rounded-[6px] bg-white">
                <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#0f172a] text-[12px]">Update details</div>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-[12px] w-full">
              <InfoField label="Full name" value="Rahul Mehta" />
              <InfoField label="Role" value="Institute Owner" />
              <InfoField label="Email address" value="rahul.mehta@lmsinstitute.com" />
              <InfoField label="Phone number" value="+91 98765 43210" />
              <InfoField label="Timezone" value="GMT+5:30 · India Standard Time" />
              <InfoField label="Language" value="English" />
            </div>
            <div className="bg-[#f8fafc] rounded-[8px] p-[12px] border border-black/[0.08] w-full">
              <p className="text-[11px] text-[#94a3b8] mb-[4px]">Bio</p>
              <p className="text-[13px] text-[#0f172a] leading-relaxed">
                Leading operations, admissions, and curriculum growth for the institute. Focused on scaling student success and instructor quality.
              </p>
            </div>
          </div>

          {/* Security + Recent Activity */}
          <div className="flex flex-col gap-[24px]">
            {/* Security */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
              <div className="flex items-center justify-between w-full">
                <div>
                  <h3 className="font-bold text-[18px] text-[#0f172a]">Security</h3>
                  <p className="text-[13px] text-[#94a3b8] mt-[4px]">Keep your owner account protected</p>
                </div>
                <button className="bg-[#5b3df6] flex items-center gap-[8px] h-[36px] justify-center px-[14px] rounded-[6px]">
                  <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-white text-[12px]">Manage security</div>
                </button>
              </div>
              <div className="flex flex-col w-full gap-[12px]">
                <div className="flex items-center justify-between py-[12px] border-b border-black/[0.08]">
                  <div>
                    <p className="text-[13px] font-semibold text-[#0f172a]">Password</p>
                    <p className="text-[11px] text-[#94a3b8]">Last changed 14 days ago</p>
                  </div>
                  <button className="border border-black/[0.08] flex items-center gap-[8px] h-[32px] justify-center px-[12px] rounded-[6px] bg-white">
                    <div className="flex flex-col font-medium h-[13px] justify-center leading-[0] text-[#0f172a] text-[11px]">Change</div>
                  </button>
                </div>
                <div className="flex items-center justify-between py-[12px] border-b border-black/[0.08]">
                  <div>
                    <p className="text-[13px] font-semibold text-[#0f172a]">2-factor authentication</p>
                    <p className="text-[11px] text-[#94a3b8]">Authenticator app plus SMS backup enabled</p>
                  </div>
                  <span className="inline-flex h-[24px] items-center px-[8px] rounded-[10px] text-[10px] font-medium bg-[#2dd4bf] text-[#023b33]">Enabled</span>
                </div>
                <div className="flex items-center justify-between py-[12px]">
                  <div>
                    <p className="text-[13px] font-semibold text-[#0f172a]">Recovery email</p>
                    <p className="text-[11px] text-[#94a3b8]">backup.rahul@proton.me</p>
                  </div>
                  <button className="border border-black/[0.08] flex items-center gap-[8px] h-[32px] justify-center px-[12px] rounded-[6px] bg-white">
                    <div className="flex flex-col font-medium h-[13px] justify-center leading-[0] text-[#0f172a] text-[11px]">Review</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
              <div>
                <h3 className="font-bold text-[18px] text-[#0f172a]">Recent activity</h3>
                <p className="text-[13px] text-[#94a3b8] mt-[4px]">A quick view of your latest account events</p>
              </div>
              <div className="flex flex-col w-full">
                <ActivityItem
                  icon="→"
                  title="New login from Mumbai"
                  subtitle="Today · 9:12 AM · Chrome on macOS"
                  badge="Approved"
                  badgeColor="green"
                />
                <ActivityItem
                  icon="🔒"
                  title="2-factor check completed"
                  subtitle="Yesterday · 7:48 PM · Authenticator code accepted"
                  badge="Logged"
                  badgeColor="slate"
                />
                <ActivityItem
                  icon="✉️"
                  title="Primary email verified"
                  subtitle="Aug 18 · Verification completed successfully"
                  badge="Complete"
                  badgeColor="slate"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
          <div>
            <h3 className="font-bold text-[18px] text-[#0f172a]">Preferences</h3>
            <p className="text-[13px] text-[#94a3b8] mt-[4px]">Control how updates and reminders are delivered to you</p>
          </div>
          <div className="flex flex-col w-full gap-[12px]">
            {[
              {
                key: "email",
                icon: "✉️",
                title: "Email notifications",
                desc: "Receive enrollment, payment, and instructor updates by email",
              },
              {
                key: "mobile",
                icon: "📱",
                title: "Mobile alerts",
                desc: "Get urgent reminders for live classes and payment issues",
              },
              {
                key: "quiet",
                icon: "🌙",
                title: "Quiet hours",
                desc: "Pause non-critical notifications between 10:00 PM and 7:00 AM",
              },
            ].map(({ key, icon, title, desc }) => (
              <div key={key} className="flex items-center justify-between py-[12px] border-b border-black/[0.08] last:border-0">
                <div className="flex items-center gap-[12px]">
                  <div className="w-[32px] h-[32px] rounded-[6px] bg-[#f1f5f9] flex items-center justify-center text-[14px]">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0f172a]">{title}</p>
                    <p className="text-[11px] text-[#94a3b8]">{desc}</p>
                  </div>
                </div>
                <Toggle enabled={prefs[key]} onChange={() => togglePref(key)} />
              </div>
            ))}
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end">
          <button className="bg-[#5b3df6] flex items-center gap-[8px] h-[44px] justify-center px-[24px] rounded-[8px]">
            <Save className="h-[16px] w-[16px] text-white" />
            <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
              Save changes
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
