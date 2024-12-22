import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import LetVarConst from './LetVarConst';
import Reconciliation from './Reconcillation';
import Callbacks from './Callbacks';
import DeepCopyShallowCopy from './DeepCopyShallowCopy';
import SpreadOperatorRestOperator from './SpreadOperatorRestOperator';
import CurryingAndHoisting from './CurryingAndHoisting';
import GeneratorsAndIterators from './GeneratorsAndIterators';
import DebouncingAndThrottling from './DebouncingAndThrottling';
import PrototypalInheritance from './PrototypalInheritance';
import PromiseAsyncFetchTryCatch from './PromiseAsyncFetchTryCatch';
import LazyLoadingAndCodeSplitting from './LazyLoading';
import Interceptors from './Interceptors';

const Javascript = () => {
  return (
    <SafeAreaView>
      {/* <LetVarConst /> */}
      {/* <Reconciliation /> */}
      {/* <DeepCopyShallowCopy /> */}
      {/* <SpreadOperatorRestOperator obj='Hey' spread='ieo' /> */}
      {/* <CurryingAndHoisting /> */}
      {/* <GeneratorsAndIterators /> */}
      {/* <DebouncingAndThrottling /> */}
      {/* <PrototypalInheritance /> */}
      {/* <Callbacks /> */}
      {/* <PromiseAsyncFetchTryCatch /> */}
      {/* <LazyLoadingAndCodeSplitting /> */}
      <Interceptors />
    </SafeAreaView>
  );
};

export default Javascript;
