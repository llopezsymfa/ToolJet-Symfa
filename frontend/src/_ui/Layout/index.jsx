import React from 'react';
import { Link } from 'react-router-dom';
import useRouter from '@/_hooks/use-router';
import { ToolTip } from '@/_components/ToolTip';
import { Profile } from '@/_components/Profile';
import { NotificationCenter } from '@/_components/NotificationCenter';
import Logo from '@assets/images/rocket.svg';
import Header from '../Header';
import { authenticationService } from '@/_services';
import config from 'config';
import { getPrivateRoute } from '../../_helpers/routes';

function Layout({ children, switchDarkMode, darkMode }) {
  const router = useRouter();
  const currentUserValue = authenticationService.currentUserValue;
  const admin = currentUserValue?.admin;
  const marketplaceEnabled = config.ENABLE_MARKETPLACE_FEATURE === 'true';

  return (
    <div className="row m-auto">
      <div className="col-auto p-0">
        <aside
          className="left-sidebar p-2 h-100 position-fixed"
          style={{ width: 48, borderRight: !darkMode ? '1px solid #eee' : 'inherit' }}
        >
          <div className="application-brand" data-cy={`home-page-logo`}>
            <Link to={getPrivateRoute('dashboard')}>
              <Logo />
            </Link>
          </div>
          <hr style={{ margin: '0 -8px' }} />
          <div>
            <ul className="sidebar-inner nav nav-vertical">
              <li className="text-center mt-2 cursor-pointer">
                <Link to={getPrivateRoute('dashboard')}>
                  <ToolTip message="Dashboard" placement="right">
                    <svg
                      className="layout-sidebar-icon"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-cy="dashboard-icon"
                    >
                      <rect
                        width="32"
                        height="32"
                        rx="4"
                        fill={
                          router.pathname === '/:workspaceId' || router.pathname === getPrivateRoute('dashboard')
                            ? '#E6EDFE'
                            : 'none'
                        }
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 9C7 7.89543 7.89543 7 9 7H13C14.1046 7 15 7.89543 15 9V13C15 14.1046 14.1046 15 13 15H9C7.89543 15 7 14.1046 7 13V9ZM13 9H9V13H13V9ZM21 7C21.5523 7 22 7.44772 22 8V10H24C24.5523 10 25 10.4477 25 11C25 11.5523 24.5523 12 24 12H22V14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14V12H18C17.4477 12 17 11.5523 17 11C17 10.4477 17.4477 10 18 10H20V8C20 7.44772 20.4477 7 21 7ZM7 19C7 17.8954 7.89543 17 9 17H13C14.1046 17 15 17.8954 15 19V23C15 24.1046 14.1046 25 13 25H9C7.89543 25 7 24.1046 7 23V19ZM13 19H9V23H13V19ZM17 19C17 17.8954 17.8954 17 19 17H23C24.1046 17 25 17.8954 25 19V23C25 24.1046 24.1046 25 23 25H19C17.8954 25 17 24.1046 17 23V19ZM19 19V23H23V19H19Z"
                        fill={
                          router.pathname === '/:workspaceId' || router.pathname === getPrivateRoute('dashboard')
                            ? '#3E63DD'
                            : '#C1C8CD'
                        }
                      />
                    </svg>
                  </ToolTip>
                </Link>
              </li>
              {window.public_config?.ENABLE_TOOLJET_DB == 'true' && admin && (
                <li className="text-center mt-3 cursor-pointer">
                  <Link to={getPrivateRoute('database')}>
                    <ToolTip message="Database" placement="right">
                      <svg
                        className="layout-sidebar-icon"
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-cy="database-icon"
                      >
                        <rect
                          y="0.325684"
                          width="32"
                          height="32"
                          rx="4"
                          fill={router.pathname === getPrivateRoute('database') ? '#E6EDFE' : '#none'}
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 9.32568C9.73478 9.32568 9.48043 9.43104 9.29289 9.61858C9.10536 9.80611 9 10.0605 9 10.3257V13.3257H13V9.32568H10ZM10 7.32568C9.20435 7.32568 8.44129 7.64175 7.87868 8.20436C7.31607 8.76697 7 9.53003 7 10.3257V16.3257C7 16.878 7.44772 17.3257 8 17.3257C8.55228 17.3257 9 16.878 9 16.3257V15.3257H13V16.3257C13 16.878 13.4477 17.3257 14 17.3257C14.5523 17.3257 15 16.878 15 16.3257V15.3257H23V22.3257C23 22.5909 22.8946 22.8453 22.7071 23.0328C22.5196 23.2203 22.2652 23.3257 22 23.3257H16C15.4477 23.3257 15 23.7734 15 24.3257C15 24.878 15.4477 25.3257 16 25.3257H22C22.7957 25.3257 23.5587 25.0096 24.1213 24.447C24.6839 23.8844 25 23.1213 25 22.3257V10.3257C25 9.53003 24.6839 8.76697 24.1213 8.20436C23.5587 7.64175 22.7957 7.32568 22 7.32568H10ZM15 9.32568V13.3257H23V10.3257C23 10.0605 22.8946 9.80611 22.7071 9.61858C22.5196 9.43104 22.2652 9.32568 22 9.32568H15ZM6 20.3257C6 19.2211 6.89543 18.3257 8 18.3257H12C13.1046 18.3257 14 19.2211 14 20.3257V24.3257C14 25.4303 13.1046 26.3257 12 26.3257H8C6.89543 26.3257 6 25.4303 6 24.3257V20.3257ZM8 20.3257V24.3257H12V20.3257H8Z"
                          fill={router.pathname === getPrivateRoute('database') ? '#3E63DD' : '#C1C8CD'}
                        />
                      </svg>
                    </ToolTip>
                  </Link>
                </li>
              )}
              <li className="text-center mt-3 cursor-pointer">
                <Link to={getPrivateRoute('workspace_settings')}>
                  <ToolTip message="Workspace settings" placement="right">
                    <svg
                      className="layout-sidebar-icon"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-cy="workspace-settings-icon"
                    >
                      <rect
                        y="0.326172"
                        width="32"
                        height="32"
                        rx="4"
                        fill={router.pathname === getPrivateRoute('workspace_settings') ? '#E6EDFE' : '#none'}
                      />
                      <g clipPath="url(#clip0_453_63684)">
                        <path
                          d="M16.0005 26.3262C14.7205 26.3262 13.6505 25.4862 13.3505 24.2462C13.2605 23.8562 12.8705 23.6262 12.4705 23.7162C12.4005 23.7362 12.3305 23.7662 12.2605 23.8062C11.1705 24.4762 9.82047 24.3062 8.92047 23.4062C8.01047 22.4962 7.85047 21.1562 8.52047 20.0662C8.62047 19.8962 8.65047 19.7062 8.60047 19.5162C8.55047 19.3262 8.44047 19.1662 8.27047 19.0662C8.21047 19.0262 8.14047 18.9962 8.06047 18.9762C6.82047 18.6762 5.98047 17.6062 5.98047 16.3262C5.98047 15.0462 6.82047 13.9762 8.06047 13.6762C8.45047 13.5862 8.69047 13.1862 8.59047 12.8062C8.57047 12.7362 8.54047 12.6662 8.50047 12.5962C7.83047 11.5062 7.99047 10.1562 8.90047 9.25617C9.81047 8.34617 11.1505 8.18617 12.2405 8.85617C12.4405 8.97617 12.6805 8.99617 12.8905 8.90617C13.1005 8.81617 13.2605 8.63617 13.3205 8.40617C13.6205 7.16617 14.6905 6.32617 15.9705 6.32617C17.2505 6.32617 18.3105 7.16617 18.6205 8.40617C18.7105 8.79617 19.1105 9.03617 19.4905 8.93617C19.5605 8.91617 19.6305 8.88617 19.7005 8.84617C20.8005 8.17617 22.1405 8.34617 23.0405 9.24617C23.9505 10.1562 24.1105 11.4962 23.4405 12.5862C23.3405 12.7562 23.3105 12.9462 23.3505 13.1362C23.3905 13.3262 23.5105 13.4862 23.6805 13.5862C23.7405 13.6262 23.8105 13.6562 23.8905 13.6662C25.1305 13.9662 25.9705 15.0362 25.9705 16.3162C25.9705 17.5962 25.1305 18.6562 23.8905 18.9662C23.5005 19.0562 23.2605 19.4562 23.3605 19.8362C23.3805 19.9062 23.4105 19.9762 23.4505 20.0462C24.1205 21.1362 23.9505 22.4862 23.0505 23.3862C22.1505 24.2862 20.8005 24.4562 19.7105 23.7862C19.5405 23.6862 19.3505 23.6562 19.1605 23.6962C18.9705 23.7362 18.8105 23.8562 18.7105 24.0262C18.6705 24.0962 18.6405 24.1562 18.6205 24.2362C18.3205 25.4762 17.2505 26.3162 15.9705 26.3162L16.0005 26.3262ZM12.6505 21.6962C13.8805 21.6962 15.0005 22.5362 15.3005 23.7762C15.4205 24.2862 15.8705 24.3262 16.0005 24.3262C16.1305 24.3262 16.5805 24.2862 16.7005 23.7762C16.7705 23.4962 16.8705 23.2362 17.0205 22.9962C17.4005 22.3762 17.9905 21.9362 18.7005 21.7662C19.4105 21.5962 20.1405 21.7062 20.7605 22.0862C21.2105 22.3562 21.5505 22.0762 21.6505 21.9762C21.7405 21.8862 22.0305 21.5362 21.7605 21.0862C21.6105 20.8462 21.5005 20.5862 21.4405 20.3062C21.0905 18.8462 21.9905 17.3762 23.4405 17.0162C23.9505 16.8962 23.9905 16.4462 23.9905 16.3162C23.9905 16.1862 23.9505 15.7362 23.4405 15.6162C23.1705 15.5462 22.9105 15.4462 22.6705 15.2962C22.0505 14.9162 21.6105 14.3162 21.4405 13.6162C21.2705 12.9062 21.3805 12.1762 21.7605 11.5562C22.0305 11.1062 21.7505 10.7662 21.6505 10.6662C21.5605 10.5762 21.2105 10.2862 20.7605 10.5562C20.5205 10.7062 20.2605 10.8162 19.9805 10.8762C18.5205 11.2262 17.0505 10.3262 16.6905 8.86617C16.5705 8.35617 16.1205 8.31617 15.9905 8.31617C15.8605 8.31617 15.4105 8.35617 15.2905 8.86617C15.0805 9.71617 14.5005 10.4062 13.6905 10.7362C12.8805 11.0762 11.9805 11.0062 11.2305 10.5462C10.7805 10.2762 10.4305 10.5562 10.3405 10.6562C10.2505 10.7462 9.96047 11.0962 10.2305 11.5462C10.3805 11.7862 10.4905 12.0462 10.5505 12.3262C10.9005 13.7862 10.0005 15.2662 8.54047 15.6162C8.03047 15.7362 7.99047 16.1862 7.99047 16.3162C7.99047 16.4462 8.03047 16.8962 8.54047 17.0162C8.82047 17.0862 9.08047 17.1962 9.32047 17.3362C10.6005 18.1162 11.0105 19.7962 10.2305 21.0762C9.96047 21.5262 10.2405 21.8662 10.3405 21.9662C10.4405 22.0662 10.7805 22.3462 11.2305 22.0762C11.4705 21.9262 11.7305 21.8162 12.0105 21.7562C12.2205 21.7062 12.4405 21.6762 12.6505 21.6762V21.6962Z"
                          fill={router.pathname === getPrivateRoute('workspace_settings') ? '#3E63DD' : '#C1C8CD'}
                        />
                        <path
                          d="M16.0005 20.3262C13.7905 20.3262 12.0005 18.5362 12.0005 16.3262C12.0005 14.1162 13.7905 12.3262 16.0005 12.3262C18.2105 12.3262 20.0005 14.1162 20.0005 16.3262C20.0005 18.5362 18.2105 20.3262 16.0005 20.3262ZM16.0005 14.3262C14.9005 14.3262 14.0005 15.2262 14.0005 16.3262C14.0005 17.4262 14.9005 18.3262 16.0005 18.3262C17.1005 18.3262 18.0005 17.4262 18.0005 16.3262C18.0005 15.2262 17.1005 14.3262 16.0005 14.3262Z"
                          fill={router.pathname === getPrivateRoute('workspace_settings') ? '#3E63DD' : '#C1C8CD'}
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_453_63684">
                          <rect width="20" height="20" fill="white" transform="translate(6 6.32617)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </ToolTip>
                </Link>
              </li>
              {admin && (
                <li className="text-center mt-3 cursor-pointer">
                  <Link to={getPrivateRoute('global_datasources')}>
                    <ToolTip message="Global Datasources" placement="right">
                      <svg
                        className="layout-sidebar-icon"
                        width="32"
                        height="33"
                        viewBox="0 0 32 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.325684"
                          width="32"
                          height="32"
                          rx="4"
                          fill={router.pathname === getPrivateRoute('global_datasources') ? '#E6EDFE' : '#none'}
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.29209 9.58052C9.01022 9.83042 9 9.97447 9 10C9 10.0255 9.01022 10.1696 9.29209 10.4195C9.57279 10.6683 10.036 10.9381 10.6943 11.185C12.0034 11.6759 13.879 12 16 12C18.121 12 19.9966 11.6759 21.3057 11.185C21.964 10.9381 22.4272 10.6683 22.7079 10.4195C22.9898 10.1696 23 10.0255 23 10C23 9.97447 22.9898 9.83042 22.7079 9.58052C22.4272 9.33166 21.964 9.06185 21.3057 8.81501C19.9966 8.32409 18.121 8 16 8C13.879 8 12.0034 8.32409 10.6943 8.81501C10.036 9.06185 9.57279 9.33166 9.29209 9.58052ZM23 12.6162C22.6909 12.7798 22.3574 12.9266 22.008 13.0576C20.4217 13.6525 18.2973 14 16 14C13.7027 14 11.5783 13.6525 9.99202 13.0576C9.64262 12.9266 9.3091 12.7798 9 12.6162V16C9 16.0187 9.00689 16.1594 9.28011 16.4067C9.55297 16.6538 10.0136 16.9298 10.6943 17.185C12.0524 17.6943 13.9615 18 16 18C18.0385 18 19.9476 17.6943 21.3057 17.185C21.9864 16.9298 22.447 16.6538 22.7199 16.4067C22.9931 16.1594 23 16.0187 23 16V12.6162ZM23 18.6158C22.6937 18.7782 22.3609 18.9253 22.008 19.0576C20.3656 19.6736 18.205 20 16 20C13.795 20 11.6344 19.6736 9.99202 19.0576C9.6391 18.9253 9.30634 18.7782 9 18.6158V22C9 22.0187 9.00689 22.1594 9.28011 22.4067C9.55297 22.6538 10.0136 22.9298 10.6943 23.185C12.0524 23.6943 13.9615 24 16 24C18.0385 24 19.9476 23.6943 21.3057 23.185C21.9864 22.9298 22.447 22.6538 22.7199 22.4067C22.9931 22.1594 23 22.0187 23 22V18.6158ZM25 22C25 22.777 24.5855 23.4156 24.0622 23.8894C23.5385 24.3634 22.8276 24.7503 22.008 25.0576C20.3656 25.6736 18.205 26 16 26C13.795 26 11.6344 25.6736 9.99202 25.0576C9.17237 24.7503 8.46146 24.3634 7.93782 23.8894C7.41454 23.4156 7 22.777 7 22V10C7 9.19711 7.43749 8.55194 7.96527 8.08401C8.49422 7.61504 9.20256 7.2384 9.99202 6.94235C11.5783 6.34749 13.7027 6 16 6C18.2973 6 20.4217 6.34749 22.008 6.94235C22.7974 7.2384 23.5058 7.61504 24.0347 8.08401C24.5625 8.55194 25 9.19711 25 10V22Z"
                          fill={router.pathname === getPrivateRoute('global_datasources') ? '#3E63DD' : '#C1C8CD'}
                        />
                      </svg>
                    </ToolTip>
                  </Link>
                </li>
              )}
              {marketplaceEnabled && (
                <li className="text-center mt-3 d-flex flex-column">
                  <Link to="/integrations">
                    <ToolTip message="Marketplace (Beta)" placement="right">
                      <div
                        className="layout-sidebar-icon cursor-pointer"
                        style={{
                          width: '32px',
                          height: '33px',
                          padding: '4px 6px',
                          backgroundColor: router.pathname === '/integrations' ? '#E6EDFE' : '#none',
                          borderRadius: '4px',
                          marginLeft: '2px',
                        }}
                      >
                        <svg
                          width="auto"
                          height="auto"
                          viewBox="0 0 32 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.325684"
                            width="32"
                            height="33"
                            rx="4"
                            fill={router.pathname === '/integrations' ? '#E6EDFE' : '#none'}
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.62969 5.61618C2.77971 2.2981 5.61934 0 8.90009 0H23.1C26.3808 0 29.2204 2.2981 30.3703 5.61618L31.4989 8.87221C31.8601 9.91437 32.199 11.2583 31.8603 12.6375C31.4447 14.33 30.4545 15.8106 29.1062 16.732V25.6641C29.1062 29.7155 25.9046 33 21.955 33H10.0443C6.0949 33 2.89327 29.7155 2.89327 25.6641V16.7315C1.54526 15.8101 0.555389 14.3297 0.139727 12.6375C-0.199061 11.2583 0.13995 9.91437 0.501169 8.87219L1.62969 5.61618ZM5.2846 17.6707V25.6641C5.2846 28.3608 7.4156 30.5468 10.0443 30.5468H21.955C24.5839 30.5468 26.7149 28.3608 26.7149 25.6641V17.6709C26.4575 17.7075 26.1941 17.7266 25.9256 17.7266C23.8362 17.7266 22.0625 16.5866 20.9628 14.8887C19.8633 16.5866 18.0895 17.7266 16 17.7266C13.9106 17.7266 12.1368 16.5866 11.0372 14.8887C9.93758 16.5866 8.16383 17.7266 6.07436 17.7266C5.80578 17.7266 5.54226 17.7075 5.2846 17.6707ZM12.2329 10.7725C12.2329 13.3981 14.048 15.2735 16 15.2735C17.9521 15.2735 19.7671 13.3981 19.7671 10.7725C19.7671 10.095 20.3025 9.54589 20.9628 9.54589C21.6231 9.54589 22.1585 10.095 22.1585 10.7725C22.1585 13.3981 23.9737 15.2735 25.9256 15.2735C27.5508 15.2735 29.0597 13.9991 29.5415 12.0381C29.7011 11.3886 29.5678 10.6231 29.2457 9.69403L28.1172 6.438C27.2574 3.9574 25.2307 2.45316 23.1 2.45316H8.90009C6.7693 2.45316 4.7426 3.9574 3.88283 6.438L2.75431 9.69403C2.4323 10.6231 2.29904 11.3886 2.45859 12.0381C2.94028 13.9991 4.44929 15.2735 6.07436 15.2735C8.02641 15.2735 9.84152 13.3981 9.84152 10.7725C9.84152 10.095 10.3768 9.54589 11.0372 9.54589C11.6975 9.54589 12.2329 10.095 12.2329 10.7725ZM21.5079 23.5342C21.8321 24.1245 21.6287 24.8725 21.0535 25.2052C19.2402 26.254 17.6675 26.8874 16.0041 26.8907C14.3385 26.8939 12.7627 26.2654 10.942 25.2029C10.368 24.8679 10.1674 24.1191 10.4939 23.5302C10.8204 22.9414 11.5504 22.7357 12.1244 23.0706C13.8116 24.0551 14.9511 24.4395 15.9995 24.4375C17.0499 24.4354 18.19 24.0452 19.879 23.0683C20.4542 22.7355 21.1834 22.9442 21.5079 23.5342Z"
                            fill={router.pathname === '/integrations' ? '#3E63DD' : '#C1C8CD'}
                          />
                        </svg>
                      </div>
                    </ToolTip>
                  </Link>
                </li>
              )}
              <li className="m-auto">
                <NotificationCenter darkMode={darkMode} />
                <Profile switchDarkMode={switchDarkMode} darkMode={darkMode} />
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div style={{ paddingLeft: 48 }} className="col">
        <Header />
        <div style={{ paddingTop: 48 }}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
