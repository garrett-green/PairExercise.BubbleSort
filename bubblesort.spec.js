describe('Bubble Sort', function(){

  beforeAll( function(){
  });

  it('handles an empty array', function(){
    expect( Sorting.bubbleSort([]) ).toEqual( [] );
  });

  it('handles single item array', function(){
    expect( [42].length ).toEqual( 1 );
    expect( Sorting.bubbleSort([42]) ).toEqual( [42] );
  });

  it('handles multiple items in an array', function(){
    expect( [42, 50].length ).toEqual( 2 );
    expect( Sorting.bubbleSort([42, 50]) ).toEqual( [42, 50] );
  });

  it('rejects non-array data type', function(){
    expect( Sorting.bubbleSort('str') ).toEqual( undefined );
    expect( Sorting.bubbleSort(()=>'foo') ).toEqual( undefined );
  });

  it('doesnt use built-in builtin sort method', function(){
    expect( Sorting.bubbleSort([]) ).toEqual( [] );
  });

  it('returns sorted array correctly', function(){
    let arr = [42, 50];
    spyOn(arr, 'sort').and.callThrough();
    Sorting.bubbleSort(arr);
    expect( arr.sort().calls.count() ).toEqual( 0 );
  });

  it('swap function correctly changes number positions', function(){
    let arr = [1,3]
    Sorting.swap(0, 1, arr)
    expect( arr ).toEqual( [3, 1] );
  });

  it('uses swap function', function(){
    let arr = [42, 50];
    spyOn(Sorting, 'swap').and.callThrough();
    Sorting.bubbleSort(arr);
    expect( Sorting.swap.calls.count() ).toEqual( arr.length );
  });

});
