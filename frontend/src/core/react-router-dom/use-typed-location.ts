import { Location, useLocation } from 'react-router-dom';

/**
 * Типизированный хук useLocation из react-router-dom.
 */
export const useTypedLocation = <T = any>() => useLocation() as Omit<Location, 'state'> & { state: T };
