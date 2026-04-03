import React from "react";
export default (props) => {
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-[#F5F7FA]">
				<div className="self-stretch">
					<div className="flex items-center self-stretch py-[58px] px-[152px] gap-[60px]" 
						style={{
							background: "linear-gradient(180deg, #110C3B, #2B1F8F, #4834DF)"
						}}>
						<div className="flex-1 py-[13px]">
							<div className="flex flex-col items-start self-stretch pb-[1px] mb-[19px]">
								<span className="text-white text-[64px] font-bold w-[533px]" >
									{"Build a modern\nlearning platform\nyour students love"}
								</span>
							</div>
							<div className="flex flex-col items-start self-stretch py-2 mb-[18px] mr-[39px]">
								<span className="text-white text-[17px] w-[496px]" >
									{"Create courses, manage cohorts, track progress, and deliver\nengaging learning experiences from one beautifully organized\nLMS built for educators and teams."}
								</span>
							</div>
							<div className="flex items-start self-stretch pt-3.5 gap-3.5">
								<button className="flex flex-col shrink-0 items-start bg-[#FF8A33] text-left py-[11px] px-5 rounded border-0" 
									style={{
										boxShadow: "0px 10px 26px #FF8A003B"
									}}
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-sm" >
										{"Get Started"}
									</span>
								</button>
								<button className="flex flex-col shrink-0 items-start bg-[#FFFFFF12] text-left py-[15px] px-[22px] rounded border border-solid border-[#FFFFFF2E]"
									onClick={()=>alert("Pressed!")}>
									<span className="text-white text-sm" >
										{"Explore Features"}
									</span>
								</button>
							</div>
						</div>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/xo8jekj7_expires_30_days.png"} 
							className="flex-1 h-[426px] object-fill"
						/>
					</div>
				</div>
				<div className="flex flex-col items-center self-stretch bg-[#F2F4F8] py-[91px] px-[120px] mb-[1px] gap-3">
					<div className="flex flex-col items-center self-stretch pt-1.5 mx-8">
						<span className="text-[#0F1724] text-[44px] font-bold" >
							{"Everything you need to teach and scale"}
						</span>
					</div>
					<div className="flex flex-col items-start py-[5px] px-3">
						<span className="text-slate-400 text-[15px] text-center w-[636px]" >
							{"From course creation to student analytics, our LMS helps you launch learning experiences\nthat feel polished, organized, and easy to grow."}
						</span>
					</div>
					<div className="flex flex-col self-stretch pt-11 mx-8 gap-6">
						<div className="flex items-center self-stretch gap-[25px]">
							<div className="flex flex-1 flex-col items-start bg-white py-[31px] pr-11 rounded-lg" 
								style={{
									boxShadow: "0px 14px 36px #0F172412"
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/unyb04aw_expires_30_days.png"} 
									className="w-[52px] h-[52px] mb-[22px] ml-7 rounded-lg object-fill"
								/>
								<div className="flex flex-col items-start pb-[1px] mb-5 ml-7">
									<span className="text-[#0F1724] text-xl font-bold" >
										{"Course builder"}
									</span>
								</div>
								<div className="flex flex-col self-stretch pb-[1px] ml-7">
									<span className="text-slate-400 text-sm" >
										{"Create structured lessons, drip content, add\nquizzes, and organize every module in\nminutes."}
									</span>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-start bg-white pt-[27px] pr-7 rounded-lg" 
								style={{
									boxShadow: "0px 14px 36px #0F172412"
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/sjyijuti_expires_30_days.png"} 
									className="w-[52px] h-[52px] mb-[23px] ml-[27px] rounded-lg object-fill"
								/>
								<div className="flex flex-col items-start pb-[1px] mb-4 ml-7">
									<span className="text-[#0F1724] text-xl font-bold" >
										{"Student management"}
									</span>
								</div>
								<div className="flex flex-col self-stretch pb-[1px] mb-14 ml-7">
									<span className="text-slate-400 text-sm" >
										{"Enroll learners, segment audiences, and keep\nevery cohort aligned with simple admin tools."}
									</span>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-start bg-white pt-[27px] pr-[27px] rounded-lg" 
								style={{
									boxShadow: "0px 14px 36px #0F172412"
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/93ak1j60_expires_30_days.png"} 
									className="w-[52px] h-[52px] mb-[22px] ml-[27px] rounded-lg object-fill"
								/>
								<div className="flex flex-col items-start pb-[1px] mb-4 ml-7">
									<span className="text-[#0F1724] text-xl font-bold" >
										{"Progress analytics"}
									</span>
								</div>
								<div className="flex flex-col self-stretch pb-[1px] mb-14 ml-[27px]">
									<span className="text-slate-400 text-sm" >
										{"See completion trends, performance insights,\nand learner activity across every program."}
									</span>
								</div>
							</div>
						</div>
						<div className="flex items-center self-stretch gap-[25px]">
							<div className="flex flex-1 flex-col items-start bg-white pt-[27px] pr-7 rounded-lg" 
								style={{
									boxShadow: "0px 14px 36px #0F172412"
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/dfh54k8g_expires_30_days.png"} 
									className="w-[52px] h-[52px] mb-[22px] ml-7 rounded-lg object-fill"
								/>
								<div className="flex flex-col items-start pb-[1px] mb-5 ml-7">
									<span className="text-[#0F1724] text-xl font-bold" >
										{"Certificates"}
									</span>
								</div>
								<div className="flex flex-col self-stretch pb-[1px] mb-[38px] ml-7">
									<span className="text-slate-400 text-sm" >
										{"Reward milestones with branded certificates\nthat make course completion feel meaningful."}
									</span>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-start bg-white pt-[27px] rounded-lg" 
								style={{
									boxShadow: "0px 14px 36px #0F172412"
								}}>
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/oq0g1qvg_expires_30_days.png"} 
									className="w-[52px] h-[52px] mb-[22px] ml-[27px] rounded-lg object-fill"
								/>
								<div className="flex flex-col items-start pb-[1px] mb-5 ml-7">
									<span className="text-[#0F1724] text-xl font-bold" >
										{"Live and recorded lessons"}
									</span>
								</div>
								<div className="flex flex-col items-start pb-[1px] mb-[38px] ml-7">
									<span className="text-slate-400 text-sm w-[283px]" >
										{"Mix video lessons, live classes, downloads,\nand community touchpoints in one flow."}
									</span>
								</div>
							</div>
							<div className="flex-1 h-[214px]">
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center self-stretch bg-[#F5F7FA] py-[95px] px-[120px] mb-[1px] gap-3">
					<div className="flex flex-col items-center self-stretch pt-1.5 mx-8">
						<span className="text-[#0F1724] text-[44px] font-bold" >
							{"Built for every kind of learning business"}
						</span>
					</div>
					<div className="flex flex-col items-start py-[5px] px-1">
						<span className="text-slate-400 text-[15px] text-center w-[650px]" >
							{"Whether you teach a classroom, coach a cohort, or train teams at scale, the platform adapts\nto the way you deliver learning."}
						</span>
					</div>
					<div className="flex items-start self-stretch pt-11 mx-8 gap-[25px]">
						<div className="flex flex-1 flex-col items-start bg-white rounded-lg" 
							style={{
								boxShadow: "0px 12px 30px #0F17240D"
							}}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/4yxxuk1g_expires_30_days.png"} 
								className="w-[362px] h-60 rounded-lg object-fill"
							/>
							<div className="flex flex-col self-stretch p-[22px] gap-1.5">
								<div className="flex flex-col items-start self-stretch pb-[1px]">
									<span className="text-[#0F1724] text-xl font-bold" >
										{"For Educators"}
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch pb-[1px]">
									<span className="text-slate-400 text-sm w-[271px]" >
										{"Create structured learning journeys with\nlessons, assignments, and clear progress\ntracking."}
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-start bg-white pb-6 rounded-lg" 
							style={{
								boxShadow: "0px 12px 30px #0F17240D"
							}}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/b6abhdjg_expires_30_days.png"} 
								className="w-[362px] h-60 rounded-lg object-fill"
							/>
							<div className="flex flex-col self-stretch py-[22px] px-[21px] gap-1.5">
								<div className="flex flex-col items-start self-stretch pb-[1px]">
									<span className="text-[#0F1724] text-xl font-bold" >
										{"For Coaches"}
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch pb-[1px]">
									<span className="text-slate-400 text-sm w-[303px]" >
										{"Support live cohorts, accountability programs,\nand premium memberships with ease."}
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-1 flex-col items-start bg-white rounded-lg" 
							style={{
								boxShadow: "0px 12px 30px #0F17240D"
							}}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/dy6voty3_expires_30_days.png"} 
								className="w-[362px] h-60 rounded-lg object-fill"
							/>
							<div className="flex flex-col self-stretch py-[22px] px-[21px] gap-1.5">
								<div className="flex flex-col items-start self-stretch pb-[1px]">
									<span className="text-[#0F1724] text-xl font-bold" >
										{"For Teams"}
									</span>
								</div>
								<div className="flex flex-col items-start self-stretch pb-[1px]">
									<span className="text-slate-400 text-sm w-[295px]" >
										{"Deliver onboarding, certification, and internal\nenablement programs across growing\norganizations."}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="self-stretch relative pt-[546px] mb-[561px]">
					<div className="self-stretch relative">
						<div className="flex flex-col items-center self-stretch bg-[#F7FCFF] py-[94px]">
							<div className="flex flex-col items-center self-stretch max-w-[1152px] py-2.5 mb-4 mx-auto">
								<span className="text-slate-900 text-[40px] font-bold" >
									{"Simple, transparent pricing"}
								</span>
							</div>
							<div className="flex flex-col items-start py-1 px-[47px] mb-[51px]">
								<span className="text-slate-400 text-lg" >
									{"Choose the perfect plan to grow your educational business."}
								</span>
							</div>
							<div className="flex items-center self-stretch max-w-[1152px] mx-auto">
								<div className="flex flex-1 flex-col items-start py-[49px] mr-[33px] gap-4 rounded-lg border border-solid border-[#00000012]">
									<div className="flex flex-col items-center self-stretch py-2 mx-[41px]">
										<span className="text-slate-900 text-2xl font-bold" >
											{"Basic Plan"}
										</span>
									</div>
									<div className="flex items-start ml-[76px]">
										<div className="w-8 h-[15px] mt-12 mr-[3px]">
										</div>
										<span className="text-slate-900 text-[56px] font-bold my-[15px] mr-[3px]" >
											{"$29"}
										</span>
										<span className="text-slate-400 text-lg mt-12 mr-[69px]" >
											{"/mo"}
										</span>
									</div>
									<div className="flex flex-col self-stretch py-[19px] mx-[41px] gap-[15px]">
										<div className="flex items-center self-stretch gap-[13px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/3s6oxxev_expires_30_days.png"} 
												className="w-6 h-6 object-fill"
											/>
											<span className="text-slate-900 text-base" >
												{"Up to 100 students"}
											</span>
										</div>
										<div className="flex items-center self-stretch gap-[13px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/0sjlxj0x_expires_30_days.png"} 
												className="w-6 h-6 object-fill"
											/>
											<span className="text-slate-900 text-base" >
												{"5 Courses"}
											</span>
										</div>
										<div className="flex items-center self-stretch gap-3">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/r8tdtno7_expires_30_days.png"} 
												className="w-6 h-6 object-fill"
											/>
											<span className="text-slate-900 text-base" >
												{"Standard Support"}
											</span>
										</div>
									</div>
									<button className="flex flex-col items-center self-stretch bg-transparent text-left py-[21px] mx-[41px] rounded border-2 border-solid border-[#00000012]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-slate-900 text-base font-bold" >
											{"Choose Basic"}
										</span>
									</button>
								</div>
								<div className="flex-1 relative mr-[15px]">
									<div className="flex flex-col items-start self-stretch bg-slate-900 py-[58px] rounded-lg" 
										style={{
											boxShadow: "0px 20px 50px #00000026"
										}}>
										<div className="flex flex-col items-center self-stretch py-[9px] mb-[18px] mx-[42px]">
											<span className="text-[#F7FCFF] text-2xl font-bold" >
												{"Pro Plan"}
											</span>
										</div>
										<div className="flex items-start mb-[17px] ml-[82px]">
											<div className="w-[33px] h-4 mt-[49px] mr-[3px]">
											</div>
											<span className="text-[#F7FCFF] text-[56px] font-bold my-[15px] mr-[3px]" >
												{"$79"}
											</span>
											<span className="text-white text-lg mt-[49px] mr-[76px]" >
												{"/mo"}
											</span>
										</div>
										<div className="flex flex-col self-stretch py-5 mb-[17px] mx-[41px] gap-4">
											<div className="flex items-center self-stretch gap-3.5">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/xuawn1b9_expires_30_days.png"} 
													className="w-[25px] h-[25px] object-fill"
												/>
												<span className="text-[#F7FCFF] text-base" >
													{"Unlimited students"}
												</span>
											</div>
											<div className="flex items-center self-stretch gap-3.5">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/kl67pqpo_expires_30_days.png"} 
													className="w-[25px] h-[25px] object-fill"
												/>
												<span className="text-[#F7FCFF] text-base" >
													{"Unlimited Courses"}
												</span>
											</div>
											<div className="flex items-center self-stretch gap-[13px]">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/3q6n6rrf_expires_30_days.png"} 
													className="w-[25px] h-[25px] object-fill"
												/>
												<span className="text-[#F7FCFF] text-base" >
													{"Custom Domain"}
												</span>
											</div>
											<div className="flex items-center self-stretch gap-3.5">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/m7wsljto_expires_30_days.png"} 
													className="w-[25px] h-[25px] object-fill"
												/>
												<span className="text-[#F7FCFF] text-base" >
													{"Priority Support"}
												</span>
											</div>
										</div>
										<button className="flex flex-col items-center self-stretch bg-[#FF8A33] text-left py-3.5 mx-[42px] rounded border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-base font-bold" >
												{"Choose Pro"}
											</span>
										</button>
									</div>
									<div className="flex flex-col items-center self-stretch absolute top-[-19px] right-0 left-0">
										<button className="flex flex-col items-start bg-[#FF8A33] text-left py-[7px] px-6 rounded-xl border-0"
											onClick={()=>alert("Pressed!")}>
											<span className="text-white text-sm font-bold" >
												{"Most Popular"}
											</span>
										</button>
									</div>
								</div>
								<div className="flex flex-1 flex-col py-[49px] gap-4 rounded-lg border border-solid border-[#00000012]">
									<div className="flex flex-col items-center self-stretch py-1.5 mx-[41px]">
										<span className="text-slate-900 text-2xl font-bold" >
											{"Enterprise Plan"}
										</span>
									</div>
									<div className="flex flex-col items-center self-stretch py-[21px] mx-[41px]">
										<span className="text-slate-900 text-[56px] font-bold" >
											{"Custom"}
										</span>
									</div>
									<div className="flex flex-col self-stretch py-[19px] mx-10 gap-[15px]">
										<div className="flex items-center self-stretch gap-[13px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/6o0dwd9g_expires_30_days.png"} 
												className="w-6 h-6 object-fill"
											/>
											<span className="text-slate-900 text-base" >
												{"Multi-Tenant setup"}
											</span>
										</div>
										<div className="flex items-center self-stretch gap-[13px]">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/6o7mozs8_expires_30_days.png"} 
												className="w-6 h-6 object-fill"
											/>
											<span className="text-slate-900 text-base" >
												{"Dedicated Manager"}
											</span>
										</div>
										<div className="flex items-center self-stretch gap-3">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/bt3c7mma_expires_30_days.png"} 
												className="w-6 h-6 object-fill"
											/>
											<span className="text-slate-900 text-base" >
												{"Advanced Integrations"}
											</span>
										</div>
									</div>
									<button className="flex flex-col items-center self-stretch bg-transparent text-left py-[22px] mx-[41px] rounded border-2 border-solid border-[#00000012]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-slate-900 text-base font-bold" >
											{"Contact Us"}
										</span>
									</button>
								</div>
							</div>
						</div>
						<div className="self-stretch bg-[#F2F4F8] absolute bottom-[-560px] right-0 left-0 py-[95px] px-[120px]">
							<div className="flex flex-col items-center self-stretch max-w-[1200px] gap-3">
								<div className="flex flex-col items-center self-stretch pt-1.5 mx-8">
									<span className="text-[#0F1724] text-[44px] font-bold" >
										{"Loved by modern education teams"}
									</span>
								</div>
								<div className="flex flex-col items-start py-[5px] px-[29px]">
									<span className="text-slate-400 text-[15px] text-center w-[601px]" >
										{"See why creators, coaches, and institutions trust LMS to deliver professional learning\nexperiences."}
									</span>
								</div>
								<div className="flex items-start self-stretch pt-11 mx-8 gap-[25px]">
									<div className="flex flex-1 flex-col bg-white py-[27px] px-7 gap-[23px] rounded-lg" 
										style={{
											boxShadow: "0px 14px 36px #0F172412"
										}}>
										<div className="flex flex-col items-start self-stretch pb-[1px]">
											<span className="text-[#0F1724] text-[15px] w-72" >
												{"“We launched our academy in less than a\nweek, and our students immediately felt\nthe difference. Everything looks polished\nand easy to follow.”"}
											</span>
										</div>
										<div className="flex items-center self-stretch gap-3.5">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/8wcmelbr_expires_30_days.png"} 
												className="w-12 h-12 object-fill"
											/>
											<div className="flex flex-1 flex-col gap-[3px]">
												<div className="flex flex-col items-start self-stretch py-[5px]">
													<span className="text-[#0F1724] text-[15px] font-bold" >
														{"Sarah Chen"}
													</span>
												</div>
												<div className="flex flex-col items-center self-stretch py-[3px]">
													<span className="text-slate-400 text-[13px]" >
														{"Founder, BrightPath Academy"}
													</span>
												</div>
											</div>
											<div className="w-12 h-12">
											</div>
										</div>
									</div>
									<div className="flex flex-1 flex-col bg-white py-[27px] gap-[23px] rounded-lg" 
										style={{
											boxShadow: "0px 14px 36px #0F172412"
										}}>
										<div className="flex flex-col self-stretch pb-[1px] mx-[27px]">
											<span className="text-[#0F1724] text-[15px]" >
												{"“The cohort and reporting tools helped our\ncoaching team stay organized without\nneeding extra software. It became our\ncentral learning hub.”"}
											</span>
										</div>
										<div className="flex items-center self-stretch ml-[27px] mr-[47px] gap-3.5">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/khz4rf2o_expires_30_days.png"} 
												className="w-12 h-12 object-fill"
											/>
											<div className="flex flex-1 flex-col gap-[3px]">
												<div className="flex flex-col items-start self-stretch py-[5px]">
													<span className="text-[#0F1724] text-[15px] font-bold" >
														{"Marcus Lee"}
													</span>
												</div>
												<div className="flex flex-col items-start self-stretch py-[3px]">
													<span className="text-slate-400 text-[13px]" >
														{"Director, Elevate Coaching"}
													</span>
												</div>
											</div>
											<div className="w-12 h-12">
											</div>
										</div>
									</div>
									<div className="flex flex-1 flex-col bg-white p-[27px] gap-[23px] rounded-lg" 
										style={{
											boxShadow: "0px 14px 36px #0F172412"
										}}>
										<div className="flex flex-col items-start self-stretch pb-[1px]">
											<span className="text-[#0F1724] text-[15px] w-[291px]" >
												{"“Our internal training finally feels modern.\nWe can onboard teams faster, certify\nprogress, and keep every program\nconsistent across regions.”"}
											</span>
										</div>
										<div className="flex items-center self-stretch">
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BywfetPpbr/u6dzkqgq_expires_30_days.png"} 
												className="w-12 h-12 mr-3.5 object-fill"
											/>
											<div className="flex flex-1 flex-col mr-[21px] gap-[3px]">
												<div className="flex flex-col items-start self-stretch py-1">
													<span className="text-[#0F1724] text-[15px] font-bold" >
														{"Priya Nair"}
													</span>
												</div>
												<div className="flex flex-col items-start self-stretch py-[3px]">
													<span className="text-slate-400 text-[13px]" >
														{"Head of Enablement, Northstar Labs"}
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="self-stretch absolute top-0 right-0 left-0 py-[100px] px-36" 
						style={{
							background: "linear-gradient(180deg, #5B3CFFF2, #2E1A6FF2)"
						}}>
						<div className="flex flex-col items-center self-stretch max-w-[1152px] gap-4">
							<div className="flex flex-col items-center self-stretch py-[15px]">
								<span className="text-white text-[40px] font-bold" >
									{"How It Works"}
								</span>
							</div>
							<div className="flex flex-col items-start py-1 px-[50px]">
								<span className="text-white text-lg" >
									{"Four simple steps to launch your online education platform."}
								</span>
							</div>
							<div className="flex items-start self-stretch pt-12 gap-8">
								<div className="flex flex-1 flex-col items-center pb-1">
									<button className="flex flex-col items-start bg-[#FFFFFF1A] text-left py-[30px] px-[37px] mb-[31px] rounded-[44px] border-2 border-solid border-[#FFFFFF4D]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-white text-4xl font-bold" >
											{"1"}
										</span>
									</button>
									<div className="flex flex-col items-start pb-[1px] mb-5">
										<span className="text-white text-xl font-bold" >
											{"Create your LMS"}
										</span>
									</div>
									<div className="flex flex-col self-stretch pb-[1px] mx-[15px]">
										<span className="text-white text-[15px] text-center" >
											{"Set up your customized, branded\nplatform in just a few clicks."}
										</span>
									</div>
								</div>
								<div className="flex flex-1 flex-col items-center pb-1">
									<button className="flex flex-col items-start bg-[#FFFFFF1A] text-left py-[30px] px-[34px] mb-[31px] rounded-[44px] border-2 border-solid border-[#FFFFFF4D]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-white text-4xl font-bold" >
											{"2"}
										</span>
									</button>
									<div className="flex flex-col items-start pb-[1px] mb-5">
										<span className="text-white text-xl font-bold" >
											{"Upload Courses"}
										</span>
									</div>
									<div className="flex flex-col self-stretch pb-[1px] mx-[11px]">
										<span className="text-white text-[15px] text-center" >
											{"Add engaging videos, documents,\nquizzes, and live classes."}
										</span>
									</div>
								</div>
								<div className="flex flex-1 flex-col items-center pb-[3px]">
									<button className="flex flex-col items-start bg-[#FFFFFF1A] text-left py-[30px] px-[33px] mb-[31px] rounded-[44px] border-2 border-solid border-[#FFFFFF4D]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-white text-4xl font-bold" >
											{"3"}
										</span>
									</button>
									<div className="flex flex-col items-start pb-[1px] mb-[25px]">
										<span className="text-white text-xl font-bold" >
											{"Sell & Earn"}
										</span>
									</div>
									<div className="flex flex-col self-stretch pb-[1px] mx-3">
										<span className="text-white text-[15px] text-center" >
											{"Market your courses and securely\ncollect payments online."}
										</span>
									</div>
								</div>
								<div className="flex flex-1 flex-col items-center pb-1">
									<button className="flex flex-col items-start bg-[#FFFFFF1A] text-left py-[30px] px-[33px] mb-[31px] rounded-[44px] border-2 border-solid border-[#FFFFFF4D]"
										onClick={()=>alert("Pressed!")}>
										<span className="text-white text-4xl font-bold" >
											{"4"}
										</span>
									</button>
									<div className="flex flex-col items-start pb-[1px] mb-6">
										<span className="text-white text-xl font-bold" >
											{"Students Learn"}
										</span>
									</div>
									<div className="flex flex-col self-stretch pb-[1px] mx-7">
										<span className="text-white text-[15px] text-center" >
											{"Deliver an amazing learning\nexperience for your students."}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}