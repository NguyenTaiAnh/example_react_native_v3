headerRight Deprecation in 'navigationOptions'
In the upcoming lecture, you will get a deprecation warning when adding headerRight to the navigationOptions in IndexScreen. It can be resolved by writing like this instead:

  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };